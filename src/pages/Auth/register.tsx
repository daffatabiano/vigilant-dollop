import style from '@/styles/auth.module.css';
import { useDispatch, useSelector } from 'react-redux';
import useAuth from 'src/hooks/useAuth';
import Icons from 'src/components/elements/SvgIcons';
import useUpload from 'src/hooks/useUpload';
import usePost from 'src/hooks/usePost';
import { useRouter } from 'next/router';
import ModalComponents from 'src/components/ModalComponents';
import FormInput from 'src/components/elements/Form';
import Input from 'src/components/elements/Form/Input';
import { setShow } from 'src/redux/slice/cardShow';
import { useState } from 'react';
import RegisterView from 'src/view/RegisterView';

export default function Register() {
    const isModalShow = useSelector((store: any) => store.show.show);
    const { onLogin } = useAuth();
    const dispath = useDispatch();
    const { upload } = useUpload();
    const [fileImage, setFileImage] = useState<any>([]);
    const [imageBannerUrl, setImageBannerUrl] = useState<any>([]);
    const [promp, setPromp] = useState<any>('');
    const router = useRouter();
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
        setTimeout(() => {
            setPromp('');
        }, 2000);
        setPromp('You have successfully deleted an image');
        if (imageBannerUrl.length === 0) {
            setPromp('Please upload an image');
        }
    };

    const handleRegister = async (e: any) => {
        e.preventDefault();

        const formData = {
            email: e.target.email.value,
            name: e.target.name.value,
            password: e.target.password.value,
            passwordRepeat: e.target.passwordRepeat.value,
            role: e.target.role.value,
            profilePictureUrl: imageBannerUrl[0],
            phoneNumber: e.target.phoneNumber.value,
        };
        try {
            const res = await onLogin('register', formData);
            if (res?.status === 200) {
                dispath(setShow());
                setPromp(res?.data?.message);
                router.push('/auth/login');
            }
        } catch (err: any) {
            setPromp(err?.response?.data?.message);
        }
    };
    return <RegisterView />;
}
