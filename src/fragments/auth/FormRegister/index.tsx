import AuthComponents from '..';
import InputAuth from '../InputAuth';
import style from 'src/styles/auth.module.css';
import SelectRole from './SelectRole';
import AuthButton from '../AuthButton';
import Additions from '../Additions';
import useUpload from 'src/hooks/useUpload';
import { useEffect, useState } from 'react';
import { setShow } from 'src/redux/slice/cardShow';
import useAuth from 'src/hooks/useAuth';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import Animation from 'src/utils/aos';

export default function FormRegister() {
    const { upload } = useUpload();
    const [fileImage, setFileImage] = useState<any>([]);
    const [imageBannerUrl, setImageBannerUrl] = useState<any>([]);
    const [promp, setPromp] = useState<any>('');
    const { onLogin } = useAuth();
    const router = useRouter();
    const dispatch = useDispatch();
    const [section, setSection] = useState(1);
    useEffect(() => {
        Animation();
    });

    const handleChange = async (e: any) => {
        const file = e.target.files[0];
        setFileImage(file);

        if (!file?.type?.startsWith('image/')) {
            setPromp('File should be .jpeg, .jpg or .png format');
        }
    };

    const changeSection = () => {
        setSection(section === 1 ? 2 : 1);
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
        const res = await onLogin('register', formData);
        if (res?.status === 200) {
            dispatch(setShow());
            setPromp(res?.data?.message);
            router.push('/Auth/login');
        } else {
            setPromp(res?.data?.message);
        }
    };
    return (
        <AuthComponents
            images="/images/register.png"
            title="Register"
            titleSpan="Welcome! Let's get you started."
        >
            <form
                data-aos="flip-left"
                data-aos-once="true"
                onSubmit={handleRegister}
            >
                <div
                    className={`d-md-flex flex-md-row p-3 ${style['form-input']}`}
                >
                    <div
                        className={`w-100 h-100 mb-md-0 ${
                            section === 1
                                ? style['register1-show']
                                : style['register1-hide']
                        }`}
                    >
                        <InputAuth
                            label="Name"
                            name="name"
                            placeholder="Name"
                        />
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
                        <button
                            className="btn btn-outline-light d-none d-md-block w-md-50 float-end"
                            onClick={changeSection}
                            type="button"
                        >
                            Next
                        </button>
                    </div>
                    <div
                        className={`w-100 ${
                            section === 2
                                ? style['register2-show']
                                : style['register2-hide']
                        }`}
                    >
                        <SelectRole id="role" />
                        <div className="d-flex flex-column flex-md-row mt-1 align-items-center gap-2">
                            <div className={style.imageurl}>
                                {imageBannerUrl.length === 0 ? (
                                    <img
                                        src="https://t4.ftcdn.net/jpg/04/81/13/43/360_F_481134373_0W4kg2yKeBRHNEklk4F9UXtGHdub3tYk.jpg"
                                        className="opacity-50"
                                        alt="to-ravel-find-freedom"
                                    />
                                ) : (
                                    <img
                                        src={imageBannerUrl[0]}
                                        alt="to-ravel-find-freedom"
                                    />
                                )}
                                {promp && (
                                    <p
                                        className={
                                            promp
                                                ? 'text-danger'
                                                : 'text-success'
                                        }
                                    >
                                        {promp}
                                    </p>
                                )}
                            </div>
                            <div>
                                <InputAuth
                                    name="profilePictureUrl"
                                    accept="image/*"
                                    type="file"
                                    label="Picture"
                                    onChange={handleChange}
                                    className="w-100"
                                />
                                <div
                                    className={`${style['btn-upload']} d-flex gap-2`}
                                >
                                    <button
                                        onClick={() => handleRemove(0)}
                                        type="button"
                                    >
                                        <i
                                            id={'remove'}
                                            className="bi bi-folder-minus text-danger"
                                        ></i>
                                    </button>
                                    <button
                                        // className="btn btn-success"
                                        onClick={handleUpload}
                                        type="button"
                                    >
                                        <i
                                            id="upload"
                                            className="bi bi-upload text-success"
                                        ></i>
                                    </button>
                                </div>
                            </div>
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
                            direct="/Auth/login"
                            directMessage="Login"
                        />
                        <button
                            className="btn btn-outline-light d-none d-md-block w-md-50 float-end mt-2"
                            onClick={changeSection}
                        >
                            Back
                        </button>
                    </div>
                    {/* {section === 1 ? (
                        <button
                            className="btn btn-outline-light d-none d-md-block w-100"
                            onClick={changeSection}
                        >
                            Next
                        </button>
                    ) : (
                        <button
                            className="btn btn-outline-light d-none d-md-block w-100 mt-2"
                            onClick={changeSection}
                        >
                            Back
                        </button>
                    )} */}
                </div>
            </form>
        </AuthComponents>
    );
}
