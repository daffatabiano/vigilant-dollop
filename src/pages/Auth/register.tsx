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

export default function Register() {
    const isModalShow = useSelector((store: any) => store.show.show);
    const { onLogin } = useAuth();
    const { post } = usePost();
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
    return (
        <div className={`${style.auth}`}>
            {isModalShow ? (
                <ModalComponents props={{ title: 'Notification' }}>
                    {promp && <p>{promp}</p>}
                    <h1>Register Success !</h1>
                </ModalComponents>
            ) : null}
            <form onSubmit={handleRegister} className={style.form}>
                <h1>
                    Register
                    <span>Welcome! Let&apos;s get you started.</span>
                </h1>
                <label htmlFor="name">
                    Name
                    <input
                        className="border border-black"
                        type="text"
                        name="name"
                        placeholder="Name"
                    />
                </label>
                <label htmlFor="email">
                    Email
                    <input
                        className="border border-black"
                        type="email"
                        name="email"
                        placeholder="example@yopmail.com"
                    />
                </label>
                <label htmlFor="password">
                    Password
                    <input
                        className="border border-black"
                        type="password"
                        name="password"
                        placeholder="••••••••"
                    />
                </label>
                <label htmlFor="passwordRepeat">
                    Password Repeat
                    <input
                        className="border border-black"
                        type="password"
                        name="passwordRepeat"
                        placeholder="••••••••"
                    />
                </label>
                <label className="form-label" htmlFor="role">
                    Role
                </label>
                <select
                    className="form-select text-black"
                    name="role"
                    id="role"
                >
                    <option className="text-black" value="admin">
                        admin
                    </option>
                    <option className="text-black" value="user">
                        user
                    </option>
                </select>
                <div>
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
                        >
                            Remove
                        </button>
                        <Input
                            accept="image/*"
                            type="file"
                            name="profilePictureUrl"
                            placeholder=""
                            defaultValue=""
                            text="Picture"
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
                </div>

                <Input
                    type="number"
                    name="phoneNumber"
                    placeholder="08XXXXXXXXX"
                    defaultValue=""
                    text="phone number"
                />
                <div className="d-flex gap-2 mt-2">
                    <button
                        onClick={() => router.push('/auth/login')}
                        className="btn btn-secondary"
                    >
                        Back
                    </button>
                    <button type="submit" className="btn btn-success">
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
}
