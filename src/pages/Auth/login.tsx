import style from '@/styles/auth.module.css';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import useAuth from 'src/hooks/useAuth';
import Icons from 'src/components/elements/SvgIcons';
import Modal from 'src/components/Modal';

export default function Login() {
    const isModalShow = useSelector((store: any) => store.toast.setToast);
    const { onLogin, isLoading } = useAuth();

   
    const handleLogin: any = (e: any) => {
        e.preventDefault();
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
        <div className={`${style.auth}`}>
            {isModalShow && <Modal />}
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
                    <button type="submit" disabled={isLoading}>
                        {isLoading ? 'Loading...' : 'Login'}
                    </button>
                    <button
                        type="submit"
                        className="btn btn-outline-secondary d-flex align-items-center justify-content-center gap-2"
                        disabled={isLoading}
                    >
                        <Icons.Google style={style.icon} /> Login with Google
                    </button>
                </div>
                <p className={style.addition}>
                    Don&apos;t have an account?
                    <Link href="/auth/signup"> Sign up</Link>
                </p>
            </form>
            <Modal message={'Login Success'} />
        </div>
    );
}
