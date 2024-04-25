import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalComponents from 'src/components/ModalComponents';
import useGet from 'src/hooks/useGet';
import useUpload from 'src/hooks/useUpload';
import FormInput from 'src/components/elements/Form';
import { setShow } from 'src/redux/slice/cardShow';
import usePost from 'src/hooks/usePost';
import Input from 'src/components/elements/Form/Input';

export default function DetailPromo() {
    const { post } = usePost();
    const { getData } = useGet();
    const [data, setData] = useState<any>([]);
    const router = useRouter();
    const { upload } = useUpload();
    const [fileImage, setFileImage] = useState<any>([]);
    const [promp, setPromp] = useState<any>('');
    const [imageBannerUrl, setImageBannerUrl] = useState<any>([]);
    const isShowNotif = useSelector((store: any) => store.show.show);
    const dispatch = useDispatch();
    const handleChange = async (e: any) => {
        const file = e.target.files[0];
        setFileImage(file);

        if (!file?.type?.startsWith('image/')) {
            setPromp('File should be .jpeg, .jpg or .png format');
        }
    };

    const handleUpload = async (e: any) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', fileImage);

        try {
            const res = await upload('upload-image', formData);
            setImageBannerUrl([...imageBannerUrl, res?.data?.url]);
            if (res?.status === 200) {
                setPromp(res?.response?.message);
            }
        } catch (err: any) {
            setPromp(err?.response?.data?.message);
        }
    };

    const handleEdit = async (e: any) => {
        e.preventDefault();
        const formData = {
            title: e.target.title.value,
            description: e.target.description.value,
            imageUrl: imageBannerUrl[0],
            terms_condition: e.target.terms_condition.value,
            promo_code: e.target.promo_code.value,
            promo_discount_price: Number(e.target.promo_discount_price.value),
            minimum_claim_price: Number(e.target.minimum_claim_price.value),
        };
        try {
            const res = await post(`update-promo/${router.query.id}`, formData);
            if (res?.status === 200) {
                dispatch(setShow());
                setPromp(res?.data?.message);
                window.location.href = '/Dashboard/pages/Promo';
            }
        } catch (err: any) {
            dispatch(setShow());
            setPromp(err?.response?.data?.message);
        }
    };

    useEffect(() => {
        if (router?.query?.id) {
            getData(`promo/${router?.query?.id}`).then((res: any) => {
                setData(res?.data?.data);
            });
        }
    }, [router?.query?.id]);

    console.log(imageBannerUrl);

    return (
        <div className="bg-warning">
            {isShowNotif && (
                <ModalComponents props={{ title: 'Promo' }}>
                    <p>{promp}</p>
                </ModalComponents>
            )}
            <FormInput onSubmit={handleEdit}>
                <Input
                    text="title"
                    name="title"
                    type="text"
                    placeholder="title"
                    defaultValue={data?.title}
                />
                <label htmlFor="description">Description</label>
                <textarea
                    name="description"
                    id="description"
                    cols={30}
                    rows={10}
                    defaultValue={data?.description}
                />
                <div>
                    {imageBannerUrl && (
                        <img
                            src={imageBannerUrl}
                            alt={data?.title}
                            width={100}
                            height={100}
                        />
                    )}
                    <label htmlFor="image">UploadImage</label>
                    <input
                        type="file"
                        name="image"
                        id="image"
                        onChange={handleChange}
                        accept="image/*"
                    />
                    <button
                        className="btn btn-success"
                        type="button"
                        onClick={handleUpload}
                    >
                        Upload
                    </button>
                </div>

                <Input
                    text="terms condition"
                    name="terms_condition"
                    type="text"
                    placeholder="terms_Condition"
                    defaultValue={data?.terms_Condition}
                />
                <Input
                    text="promo code"
                    name="promo_code"
                    type="text"
                    placeholder="promo_code"
                    defaultValue={data?.promo_code}
                />
                <Input
                    text="promo discount"
                    name="promo_discount_price"
                    type="number"
                    placeholder="promo discount price"
                    defaultValue={data?.promo_discount_price}
                />
                <Input
                    text="promo minimum claim price"
                    name="minimum_claim_price"
                    type="number"
                    placeholder="minimum claim price"
                    defaultValue={data?.minimum_claim_price}
                />
                <div>
                    <button
                        className="btn btn-secondary"
                        onClick={() => router.back()}
                    >
                        Back
                    </button>
                </div>
                <button type="submit" className="btn btn-success">
                    Save
                </button>
            </FormInput>
        </div>
    );
}
