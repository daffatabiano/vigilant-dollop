import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useGet from 'src/hooks/useGet';
import usePost from 'src/hooks/usePost';
import useUpload from 'src/hooks/useUpload';
import { setShow } from 'src/redux/slice/cardShow';
import FormInput from 'src/components/elements/Form';
import Input from 'src/components/elements/Form/Input';
import style from 'src/styles/FormStyles/edit_form.module.css';
import ModalNotif from 'src/components/Modals/ModalNotif';
import LoadingPage from 'src/fragments/loading';

export default function EditBanner() {
    const [data, setData] = useState<any>([]);
    const { getData } = useGet();
    const router = useRouter();
    const { post } = usePost();
    const { upload } = useUpload();
    const [fileImage, setFileImage] = useState<any>([]);
    const [imageBannerUrl, setImageBannerUrl] = useState<any>('');
    const [promp, setPromp] = useState<any>('');
    const isShowNotif = useSelector((store: any) => store.show.show);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState<boolean>(false);

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
            if (res?.status === 200) {
                setIsLoading(true);
                setPromp(res?.data?.message);
                setTimeout(() => {
                    setPromp('');
                    setIsLoading(false);
                }, 2000);
            }
        } catch (err: any) {
            setPromp(err?.response?.data.message);
        }
    };

    const handleEdit = async (e: any) => {
        e.preventDefault();
        const formData = {
            name: e.target.name.value,
            imageUrl: imageBannerUrl[0],
        };
        try {
            const res = await post(
                `update-banner/${router.query.id}`,
                formData
            );
            if (res?.status === 200) {
                setIsLoading(true);
                dispatch(setShow());
                setPromp(res?.data?.message);
                setTimeout(() => {
                    setPromp('');
                    setIsLoading(false);
                    window.location.href = '/Dashboard/pages/Banner';
                }, 2000);
            }
        } catch (err: any) {
            dispatch(setShow());
            setPromp(err?.response?.data?.message);
        }
    };

    useEffect(() => {
        if (router.query.id) {
            getData(`banner/${router.query.id}`).then((res) => {
                setData(res?.data.data);
            });
        }
    }, [router.query.id]);

    return (
        <>
            {isLoading && <LoadingPage />}
            <div className={`${style.container}`}>
                <h2>Edit Banner</h2>
                {isShowNotif && (
                    <ModalNotif modal={{ head: 'EditBanner', text: promp }} />
                )}
                {promp && (
                    <p
                        className={`alert ${
                            promp.includes('success')
                                ? 'alert-success'
                                : 'alert-danger'
                        }`}
                    >
                        {promp}
                    </p>
                )}
                <FormInput className={`${style.form}`} onSubmit={handleEdit}>
                    <Input
                        text="Name"
                        name="name"
                        type="text"
                        placeholder="Name"
                        defaultValue={data?.name}
                    />

                    <div className="d-flex flex-column w-100 ">
                        {imageBannerUrl.length > 1 ? (
                            <img src={imageBannerUrl[0]} alt={data?.name} />
                        ) : (
                            <img src={data?.imageUrl} alt={data?.name} />
                        )}
                        <Input
                            text="Image Url"
                            name="imageUrl"
                            type="file"
                            placeholder="Image Url"
                            defaultValue={data?.imageUrl}
                            onChange={handleChange}
                            accept="image/*"
                        />
                        <button
                            className="btn btn-warning mt-2 w-25 "
                            onClick={handleUpload}
                            type="button"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">
                                        Loading...
                                    </span>
                                </div>
                            ) : (
                                'Upload'
                            )}
                        </button>
                    </div>

                    <p className="text-black">CREATED on {data?.createdAt}</p>
                    <p className="text-black">UPDATED on {data?.updatedAt}</p>
                    <div className="d-flex gap-3">
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() =>
                                (window.location.href =
                                    '/Dashboard/pages/Banner')
                            }
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
                        <button className="btn btn-primary" type="submit">
                            {isLoading ? (
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">
                                        Loading...
                                    </span>
                                </div>
                            ) : (
                                'Save'
                            )}
                        </button>
                    </div>
                </FormInput>
            </div>
        </>
    );
}
