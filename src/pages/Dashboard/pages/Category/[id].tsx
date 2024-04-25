import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useGet from 'src/hooks/useGet';
import { useDispatch, useSelector } from 'react-redux';
import { setShow } from 'src/redux/slice/cardShow';
import FormInput from 'src/components/elements/Form';
import useUpload from 'src/hooks/useUpload';
import Input from 'src/components/elements/Form/Input';
import usePost from 'src/hooks/usePost';
import ModalComponents from 'src/components/ModalComponents';

export default function CategoryDetail() {
    const { getData } = useGet();
    const { upload } = useUpload();
    const { post } = usePost();
    const router = useRouter();
    const [data, setData] = useState<any>([]);
    const [fileImage, setFileImage] = useState<any>([]);
    const [imageBannerUrl, setImageBannerUrl] = useState<any>([]);
    const [promp, setPromp] = useState<any>('');
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
                setPromp(res?.response?.message);
            }
        } catch (err: any) {
            setPromp(err?.response?.data?.message);
        }
    };

    const handleEdit = async (e) => {
        e.preventDefault();

        const formData = {
            name: e.target.name.value,
            imageUrl: imageBannerUrl[0],
        };
        try {
            const res = await post(
                `update-category/${router.query.id}`,
                formData
            );
            if (res?.status === 200) {
                dispatch(setShow());
                setPromp(res?.data?.message);
                router.push('/Dashboard/pages/Category');
            }
        } catch (err: any) {
            setPromp(err?.response?.data?.message);
        }
    };

    useEffect(() => {
        if (router?.query?.id) {
            getData(`category/${router?.query?.id}`).then((res: any) => {
                setData(res?.data?.data);
                console.log(res?.data?.data);
            });
        }
    }, [router?.query?.id]);

    return (
        <div className="bg-warning">
            {isShowNotif && (
                <ModalComponents props={{ title: 'Edit Category' }}>
                    <p>{promp}</p>
                </ModalComponents>
            )}
            <FormInput onSubmit={handleEdit}>
                <Input
                    text="name"
                    name="name"
                    type="text"
                    placeholder="input name"
                    defaultValue={data?.name}
                ></Input>
                {imageBannerUrl && (
                    <img
                        src={imageBannerUrl[0]}
                        alt="image banner"
                        width="200"
                        height="200"
                    />
                )}
                <label htmlFor="image">Image</label>
                <input type="file" accept="image/*" onChange={handleChange} />
                <button
                    type="button"
                    onClick={handleUpload}
                    className="btn btn-primary"
                >
                    Upload
                </button>

                <div>
                    <button
                        className="btn btn-secondary"
                        onClick={() => router.back()}
                    >
                        back
                    </button>
                    <button className="btn btn-success" type="submit">
                        {' '}
                        Save
                    </button>
                </div>
            </FormInput>
        </div>
    );
}
