import { useState } from 'react';
import usePost from 'src/hooks/usePost';
import useUpload from 'src/hooks/useUpload';
import FormInput from 'src/components/elements/Form';
import { useDispatch, useSelector } from 'react-redux';
import { clearCreate } from 'src/redux/slice/createShow';
import Input from '../Input';
import style from 'src/styles/FormStyles/create_form.module.css';
import LoadingPage from 'src/fragments/loading';
import { ScrollShadow } from '@nextui-org/react';

export default function CreateBanner() {
    const { post } = usePost();
    const { upload } = useUpload();
    const dispatch = useDispatch();
    const [fileImage, setFileImage] = useState<any>([]);
    const [imageBannerUrl, setImageBannerUrl] = useState<any>('');
    const [promp, setPromp] = useState<any>('');
    const isShowModal = useSelector((store: any) => store.show.show);
    const [isLoading, setIsLoading] = useState<boolean>(false);

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

    const handleRemove = (str: any) => {
        const newImages = imageBannerUrl.filter((_: any, i: any) => i !== str);
        setImageBannerUrl(newImages);
        setPromp('You have successfully deleted an image');
        setTimeout(() => {
            setPromp('');
        }, 2000);

        if (imageBannerUrl.length === 0) {
            setPromp('Please upload an image');
        }
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
                setIsLoading(true);
                setPromp(resp?.data?.message);
                setTimeout(() => {
                    window.location.reload();
                    setIsLoading(false);
                }, 3000);
            }
        } catch (err: any) {
            console.log(err?.response?.data?.message);
        }
    };

    return (
        <>
            {isLoading && <LoadingPage />}
            <ScrollShadow className={style.container}>
                {promp && (
                    <p
                        className={
                            promp.includes('success') ||
                            promp.includes('created')
                                ? 'alert alert-success'
                                : 'alert alert-danger'
                        }
                    >
                        {promp}
                    </p>
                )}
                <FormInput className={style.form} onSubmit={handleCreate}>
                    <label htmlFor="image">Banner Image&apos;s</label>
                    {imageBannerUrl.length > 1 ? (
                        <img
                            src={imageBannerUrl[0]}
                            alt="to-ravel-find-freedom"
                        />
                    ) : (
                        <img
                            src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"
                            alt="to-ravel-find-freedom"
                        />
                    )}
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleChange}
                        className="mt-3"
                    />
                    {/* <Input
                        text="Banner Image"
                        name="image"
                        type="file"
                        placeholder="Enter Banner Image"
                        defaultValue=""
                        accept="image/*"
                        onChange={handleChange}
                    /> */}
                    <div className="d-flex flex-column justify-content-between align-center mt-3">
                        <button
                            onClick={() => handleRemove(0)}
                            className="btn btn-danger"
                            type='button'
                        >
                            Remove
                        </button>
                        <button
                            className={`mt-3 btn btn-success`}
                            type="button"
                            onClick={handleUpload}
                        >
                            Upload
                        </button>
                    </div>
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
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">
                                        Loading...
                                    </span>
                                </div>
                            ) : (
                                'Cancel'
                            )}
                        </button>
                        <button type="submit" disabled={isLoading}>
                            {isLoading ? (
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">
                                        Loading...
                                    </span>
                                </div>
                            ) : (
                                'Submit'
                            )}
                        </button>
                    </div>
                </FormInput>
            </ScrollShadow>
        </>
    );
}
