import style from '@/styles/auth.module.css';
import { useDispatch, useSelector } from 'react-redux';
import useAuth from 'src/hooks/useAuth';
import Icons from 'src/components/elements/SvgIcons';
import { useState } from 'react';
import useUpload from 'src/hooks/useUpload';
import usePost from 'src/hooks/usePost';
import { useRouter } from 'next/router';
import ModalComponents from 'src/components/ModalComponents';
import FormInput from 'src/components/elements/Form';
import Input from 'src/components/elements/Form/Input';

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
                setPromp(res?.response?.message);
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
                    <p>{promp}</p>
                </ModalComponents>
            ) : null}
            <FormInput onSubmit={handleRegister} className={style.form}>
                <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    defaultValue=""
                    text="name"
                />
                <Input
                    type="text"
                    name="email"
                    placeholder="example@yopmail.com"
                    defaultValue=""
                    text="email"
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    defaultValue=""
                    text="password"
                    className="form-control"
                />
                <Input
                    type="password"
                    name="passwordRepeat"
                    placeholder="••••••••"
                    defaultValue=""
                    text="password repeat"
                />
                <label htmlFor="role">Role</label>
                <select
                    className="form-select text-black"
                    name="role"
                    id="role"
                >
                    <option value="admin">admin</option>
                    <option value="user">user</option>
                </select>
                <div>
                    {imageBannerUrl ? (
                        <img src={imageBannerUrl} alt="to-ravel-find-freedom" />
                    ) : (
                        <img
                            src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"
                            alt=""
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

                <Input
                    type="number"
                    name="phoneNumber"
                    placeholder="08XXXXXXXXX"
                    defaultValue=""
                    text="phone number"
                />
                <button
                    onClick={() => router.push('/auth/login')}
                    className="btn btn-secondary"
                >
                    Back
                </button>
                <button type="submit" className="btn btn-success">
                    Register
                </button>
            </FormInput>
        </div>
    );
}
