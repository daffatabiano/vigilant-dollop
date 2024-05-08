import { useState } from 'react';
import usePost from 'src/hooks/usePost';
import useUpload from 'src/hooks/useUpload';
import FormInput from 'src/components/elements/Form';
import { useDispatch, useSelector } from 'react-redux';
import { clearCreate } from 'src/redux/slice/createShow';
import Input from '../Input';
import style from 'src/styles/FormStyles/create_form.module.css';
import { setShow } from 'src/redux/slice/cardShow';
import ModalComponents from 'src/components/Modals/ModalComponents';

export default function CreateBanner() {
    const { post } = usePost();
    const { upload } = useUpload();
    const dispatch = useDispatch();
    const [fileImage, setFileImage] = useState<any>([]);
    const [imageBannerUrl, setImageBannerUrl] = useState<any>('');
    const [promp, setPromp] = useState<any>('');
    const isShowModal = useSelector((store: any) => store.show.show);

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

    const removeImage = (index: any) => {
        const newImages = imageBannerUrl.filter(
            (_: any, i: any) => i !== index
        );
        setImageBannerUrl(newImages);
    };

    const handleCreate = async (e: any) => {
        e.preventDefault();

        const formData = {
            name: e.target.name.value,
            imageUrl: imageBannerUrl[0],
        };
        try {
            const resp = await post('create-banner', formData);
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
            {promp && <p>{promp}</p>}
            <FormInput className={style.form} onSubmit={handleCreate}>
                {imageBannerUrl && (
                    <img src={imageBannerUrl[0]} alt="to-ravel-find-freedom" />
                )}
                <Input
                    text="Banner Image"
                    name="image"
                    type="file"
                    placeholder="Enter Banner Image"
                    defaultValue=""
                    accept="image/*"
                    onChange={handleChange}
                />
                <button
                    className={`mt-3 ${style.upload}`}
                    type="button"
                    onClick={handleUpload}
                >
                    Upload
                </button>
                <Input
                    text="Name"
                    name="name"
                    type="text"
                    placeholder="Enter Banner Name"
                    defaultValue=""
                />
                <div className={style.button}>
                    <button
                        type="button"
                        onClick={() => dispatch(clearCreate())}
                    >
                        Cancel
                    </button>
                    <button type="submit">Submit</button>
                </div>
            </FormInput>
        </>
    );
}
