import style from '@/styles/auth.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import useAuth from 'src/hooks/useAuth';
import Icons from 'src/components/elements/SvgIcons';
import { setShow } from 'src/redux/slice/cardShow';
import ModalComponents from 'src/components/ModalComponents';
import { useState } from 'react';

export default function Login() {
    const isModalShow = useSelector((store: any) => store.show.show);
    const { onLogin } = useAuth();
    const [promp, setPromp] = useState<any>('');
    const dispatch = useDispatch();

    const handleLogin = async (e: any) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            password: e.target.password.value,
        };
        try {
            const res = await onLogin('login', data);
            if (res?.status === 200) {
                localStorage.setItem('token', res?.data?.token);
                setPromp(res?.data?.message);
                dispatch(setShow());
                window.location.href = '/Dashboard';
            }
        } catch (err: any) {
            dispatch(setShow());
            setPromp(err?.response?.data?.message);
        }
    };

    return (
        <div className={`${style.auth}`}>
            {isModalShow ? (
                <ModalComponents props={{ title: 'Login' }}>
                    <p>{promp}</p>
                </ModalComponents>
            ) : null}
            <form onSubmit={handleLogin} className={style.form}>
                <h1>
                    Login
                    <span>Sign in with your email address</span>
                </h1>
                <label className={'text-black'}>
                    Email
                    <input name="email" placeholder="email" type="text" />
                </label>
                <label className={'text-black'}>
                    Password
                    <input name="password" type="Password" />
                </label>
                <div className={style['form-checkbox']}>
                    <input type="checkbox" className={'form-check-input'} />
                    <span className={'text-black ms-2 fw-light'}>
                        Remember me
                    </span>
                </div>
                <a>Forgot password?</a>
                <div className={style.button}>
                    <button type="submit">Login</button>
                    <button
                        type="submit"
                        className="btn btn-outline-secondary d-flex align-items-center justify-content-center gap-2"
                    >
                        <Icons.Google style={style.icon} /> Login with Google
                    </button>
                </div>
                <p className={style.addition}>
                    Don&apos;t have an account?
                    <Link href="/auth/register"> Sign up</Link>
                </p>
            </form>
        </div>
    );
}
