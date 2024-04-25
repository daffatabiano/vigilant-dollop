import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import usePost from 'src/hooks/usePost';
import useUpload from 'src/hooks/useUpload';
import { setShow } from 'src/redux/slice/cardShow';
import FormInput from 'src/components/elements/Form';
import Input from '../Input';
import { ScrollShadow } from '@nextui-org/react';
import style from 'src/styles/FormStyles/create_form.module.css';
import ModalComponents from 'src/components/ModalComponents';

export default function CreatePromo() {
    const [data, setData] = useState<any>([]);
    const { post } = usePost();
    const { upload } = useUpload();
    const [promp, setPromp] = useState<any>('');
    const [fileImage, setFileImage] = useState<any>(null);
    const [imageBannerUrl, setImageBannerUrl] = useState<any>('');
    const dispatch = useDispatch();
    const isShowNotif = useSelector((store: any) => store.show.show);

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
                setPromp(res?.data?.message);
            }
        } catch (err: any) {
            setPromp(err?.response?.data?.message);
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
            const resp = await post('create-promo', formData);
            if (resp?.status === 200) {
                setPromp(resp?.data?.message);
                dispatch(setShow());
                window.location.reload();
            }
        } catch (err: any) {
            console.log(err?.response?.data?.message);
        }
    };
    return (
        <>
            {isShowNotif && (
                <ModalComponents props={{ title: 'Promo Created' }}>
                    <p>{promp}</p>
                </ModalComponents>
            )}
            <ScrollShadow className={style['form-container']}>
                <FormInput onSubmit={handleCreate}>
                    <Input
                        text="Title"
                        name="title"
                        type="text"
                        placeholder="Title"
                        defaultValue={''}
                    />
                    <label htmlFor="description">Desctiption</label>
                    <textarea name="description" id="description" />
                    {imageBannerUrl && <img src={imageBannerUrl} />}
                    <Input
                        text="Image"
                        name="image"
                        type="file"
                        placeholder="Image"
                        defaultValue={''}
                        onChange={handleChange}
                    />
                    <button
                        className="btn btn-success"
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
                        defaultValue={''}
                    />
                    <Input
                        text="promo code"
                        name="promo_code"
                        type="text"
                        placeholder="promo code"
                        defaultValue={''}
                    />
                    <Input
                        text="promo discount price"
                        name="promo_discount_price"
                        type="number"
                        placeholder="promo discount price"
                        defaultValue={''}
                    />
                    <Input
                        text="minimum claim price"
                        name="minimum_claim_price"
                        type="number"
                        placeholder="minimum claim price"
                        defaultValue={''}
                    />
                    <button type="submit" className="btn btn-primary">
                        Create
                    </button>
                </FormInput>
            </ScrollShadow>
        </>
    );
}
