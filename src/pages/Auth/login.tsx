import style from '@/styles/auth.module.css';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import useAuth from 'src/hooks/useAuth';
import Icons from 'src/components/elements/SvgIcons';
import Modal from 'src/components/Modal';

export default function Login() {
    const { onLogin, isLoading } = useAuth();
    const [fill, setFill] = useState(false);

    if (isLoading) {
        return (
            <h1 className={'m-auto text-center text-black font-bold text-3xl'}>
                Loading ...
            </h1>
        );
    }
    const handleLogin: any = (e: any) => {
        e.preventDefault();
        setFill(true);
        const email = e.target.email.value;
        const password = e.target.password.value;

        onLogin(
            'login',
            { email, password },
            {
                headers: {
                    apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
                },
            }
        );
    };
    return (
        <div
            className={
                `${style.auth}vh-100 d-flex flex-column align-items-center justify-content-center`
            }
        >
            <form
                onSubmit={handleLogin}
                className="d-flex text-black flex-column justify-content-between py-3 vh-100 w-75"
            >
                <h1 className=" font-bold fs-1 text-primary d-flex flex-column">
                    Login
                    <span className={'text-black fw-light fs-3'}>
                        Sign in with your email address
                    </span>
                </h1>
                <label className={'text-black'}>
                    Email
                    <input
                        className={'w-100 rounded-pill'}
                        name="email"
                        placeholder="email"
                        type="text"
                    />
                </label>
                <label className={'text-black'}>
                    Password
                    <input
                        className={'w-100 rounded-pill'}
                        name="password"
                        type="Password"
                    />
                </label>
                <div className={'d-flex align-items-center'}>
                    <input type="checkbox" className={'form-check-input'} />
                    <span className={'text-black ms-2 fw-light'}>
                        Remember me
                    </span>
                </div>
                <a className={'text-secondary text-decoration-underline'}>
                    Forgot password?
                </a>
                <div className={'d-flex flex-column  gap-2'}>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Loading...' : 'Login'}
                    </button>
                    <button
                        type="submit"
                        className="btn btn-outline-primary d-flex align-items-center justify-content-center gap-2"
                        disabled={isLoading}
                    >
                        <Icons.Google style={'w-5 text-primary'} /> Sign in with
                        Google
                    </button>
                </div>
                <p className={'text-black'}>
                    Don&apos;t have an account?
                    <Link
                        href="/auth/signup"
                        className={'text-primary fw-bold'}
                    >
                        {' '}
                        Sign up
                    </Link>
                </p>
            </form>
            <Modal message={'Login Success'} />
        </div>
    );
}
