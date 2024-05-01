import AuthComponents from '..';
import InputAuth from '../InputAuth';
import style from 'src/styles/auth.module.css';
import SelectRole from './SelectRole';
import AuthButton from '../AuthButton';
import Additions from '../Additions';
import useUpload from 'src/hooks/useUpload';
import { useState } from 'react';
import { setShow } from 'src/redux/slice/cardShow';
import useAuth from 'src/hooks/useAuth';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

export default function FormRegister() {
    const { upload } = useUpload();
    const [fileImage, setFileImage] = useState<any>([]);
    const [imageBannerUrl, setImageBannerUrl] = useState<any>([]);
    const [promp, setPromp] = useState<any>('');
    const { onLogin } = useAuth();
    const router = useRouter();
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
                dispatch(setShow());
                setPromp(res?.data?.message);
                router.push('/auth/login');
            }
        } catch (err: any) {
            setPromp(err?.response?.data?.message);
        }
    };
    return (
        <AuthComponents
            title="Register"
            titleSpan="Welcome! Let's get you started."
        >
            <form onSubmit={handleRegister}>
                <div className={style['form-input']}>
                    <InputAuth label="Name" name="name" placeholder="Name" />
                    <InputAuth
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="example@ex.com"
                    />
                    <InputAuth
                        label="Password"
                        name="password"
                        placeholder="Minimum 8 characters"
                        type="password"
                    />
                    <InputAuth
                        label="Repeat Password"
                        name="passwordRepeat"
                        placeholder="Must be the same as password"
                        type="password"
                    />
                    <SelectRole id="role" />
                    <div className="d-flex flex-column align-items-center mt-2 gap-2">
                        {fileImage === undefined ? (
                            <img
                                src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"
                                alt=""
                            />
                        ) : (
                            <img
                                src={imageBannerUrl}
                                alt="to-ravel-find-freedom"
                            />
                        )}
                        {promp && <p>{promp}</p>}
                        <button
                            onClick={() => handleRemove(0)}
                            className="btn btn-danger"
                            type="button"
                        >
                            Remove
                        </button>
                        <InputAuth
                            name="profilePictureUrl"
                            accept="image/*"
                            type="file"
                            label="Picture"
                            onChange={handleChange}
                        />

                        <button
                            className="btn btn-success"
                            onClick={handleUpload}
                            type="button"
                        >
                            Upload
                        </button>
                    </div>
                    <InputAuth
                        label="Phone Number"
                        name="phoneNumber"
                        placeholder="+62 812 3456 7890"
                        type="number"
                    />
                    <AuthButton text="Register" type="submit" />
                    <Additions
                        message="Already have an account?"
                        direct="/auth/login"
                        directMessage="Login"
                    />
                </div>
            </form>
        </AuthComponents>
    );
}
