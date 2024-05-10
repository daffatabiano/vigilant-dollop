import { useEffect, useState } from 'react';
import useGet from 'src/hooks/useGet';
import usePost from 'src/hooks/usePost';
import FormInput from 'src/components/elements/Form';
import useUpload from 'src/hooks/useUpload';
import style from 'src/styles/FormStyles/edit_form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import ModalComponents from 'src/components/Modals/ModalComponents';
import Input from '../../Input';
import { useRouter } from 'next/router';
import { setShow } from 'src/redux/slice/cardShow';

export default function EditCategory({ category }: any) {
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
                setPromp(res?.data?.message);
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
        <div className={style.container}>
            <h2>Edit Category</h2>
            {isShowNotif && (
                <ModalComponents props={{ title: 'Edit Category' }}>
                    <p>{promp}</p>
                </ModalComponents>
            )}
            <FormInput className={style.form} onSubmit={handleEdit}>
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
                <div className={style['image']}>
                    <label htmlFor="image">Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleChange}
                    />
                </div>
                <button
                    type="button"
                    onClick={handleUpload}
                    className={style['upload']}
                >
                    Upload
                </button>

                <div className={style['button']}>
                    <button type="button" onClick={() => router.back()}>
                        back
                    </button>
                    <button type="submit"> Save</button>
                </div>
            </FormInput>
        </div>
    );
}
