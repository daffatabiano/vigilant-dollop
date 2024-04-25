import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalComponents from 'src/components/ModalComponents';
import FormInput from 'src/components/elements/Form';
import Input from 'src/components/elements/Form/Input';
import useGet from 'src/hooks/useGet';
import usePost from 'src/hooks/usePost';
import useUpload from 'src/hooks/useUpload';
import { setShow } from 'src/redux/slice/cardShow';

export default function BannerDetail() {
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
            name: e.target.name.value,
            imageUrl: imageBannerUrl[0],
        };
        try {
            const res = await post(
                `update-banner/${router.query.id}`,
                formData
            );
            if (res?.status === 200) {
                dispatch(setShow());
                setPromp(res?.data?.message);
                window.location.href = '/Dashboard/pages/Banner';
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

    console.log(imageBannerUrl);

    return (
        <>
            {isShowNotif && (
                <ModalComponents props={{ title: 'Notification' }}>
                    <p>{promp}</p>
                </ModalComponents>
            )}
            <FormInput onSubmit={handleEdit}>
                <Input
                    text="Name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    defaultValue={data?.name}
                />

                {imageBannerUrl && <img src={imageBannerUrl} alt="" />}
                <div>
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
                        className="btn btn-warning"
                        onClick={handleUpload}
                        type="button"
                    >
                        Upload
                    </button>
                </div>

                <button className="btn btn-primary" type="submit">
                    Save
                </button>
            </FormInput>
            <p className="text-black">{data?.createdAt}</p>
            <p className="text-black">{data?.updatedAt}</p>
        </>
    );
}
