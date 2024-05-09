import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import usePost from 'src/hooks/usePost';
import useUpload from 'src/hooks/useUpload';
import { setShow } from 'src/redux/slice/cardShow';
import FormInput from 'src/components/elements/Form';
import { ScrollShadow } from '@nextui-org/react';
import style from 'src/styles/FormStyles/edit_form.module.css';
import ModalComponents from 'src/components/Modals/ModalComponents';
import Input from '../../Input';
import useGet from 'src/hooks/useGet';
import { useRouter } from 'next/router';

export default function EditPromo() {
    const [data, setData] = useState<any>([]);
    const { getData } = useGet();
    const { post } = usePost();
    const { upload } = useUpload();
    const [promp, setPromp] = useState<any>('');
    const [fileImage, setFileImage] = useState<any>([]);
    const [imageBannerUrl, setImageBannerUrl] = useState<any>('');
    const dispatch = useDispatch();
    const isShowNotif = useSelector((store: any) => store.show.show);
    const router = useRouter();

    const handleChange = (e: any) => {
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
        } catch (err: any) {
            console.log(err?.response?.data.message);
        }
    };

    const handleCreate = async (e: any) => {
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
            const resp = await post(
                `update-promo/${router.query.id}`,
                formData
            );
            if (resp?.status === 200) {
                setPromp(resp?.data?.message);
                dispatch(setShow());
                window.location.href = '/Dashboard/pages/Promo';
            }
        } catch (err: any) {
            console.log(err?.response?.data?.message);
        }
    };
    useEffect(() => {
        getData('promos').then((res) => {
            setData(res?.data?.data);
        });
    }, []);

    console.log(imageBannerUrl, 'imageBannerUrl');

    return (
        <div className={style['container']}>
            <h1>Edit Promo</h1>
            {isShowNotif && (
                <ModalComponents props={{ title: 'Promo Created' }}>
                    <p>{promp}</p>
                </ModalComponents>
            )}
            <FormInput className={style['form']} onSubmit={handleCreate}>
                <Input
                    text="Title"
                    name="title"
                    type="text"
                    placeholder="Title"
                    defaultValue={data?.title}
                />
                <label htmlFor="description">Desctiption</label>
                <textarea name="description" id="description" />
                {imageBannerUrl && <img src={imageBannerUrl[0]} />}
                <Input
                    text="Image"
                    name="imageUrl"
                    type="file"
                    placeholder="Image"
                    defaultValue={data?.imageUrl}
                    onChange={handleChange}
                />
                <button
                    className={style['upload']}
                    type="button"
                    onClick={handleUpload}
                >
                    upload
                </button>
                <Input
                    text="Terms_Conditions"
                    name="terms_condition"
                    type="text"
                    placeholder="Terms_Conditions"
                    defaultValue={data?.terms_condition}
                />
                <Input
                    text="promo code"
                    name="promo_code"
                    type="text"
                    placeholder="promo code"
                    defaultValue={data?.promo_code}
                />
                <Input
                    text="promo discount price"
                    name="promo_discount_price"
                    type="number"
                    placeholder="promo discount price"
                    defaultValue={data?.promo_discount_price}
                />
                <Input
                    text="minimum claim price"
                    name="minimum_claim_price"
                    type="number"
                    placeholder="minimum claim price"
                    defaultValue={data?.minimum_claim_price}
                />
                <div className={style.button}>
                    <button type="button" onClick={() => router?.back()}>
                        Back
                    </button>
                    <button type="submit">Create</button>
                </div>
            </FormInput>
        </div>
    );
}
