import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import ModalComponents from 'src/components/ModalComponents';
import FormLogin from 'src/fragments/auth/FormLogin';
import useAuth from 'src/hooks/useAuth';
import { setShow } from 'src/redux/slice/cardShow';
import style from 'src/styles/auth.module.css';

export default function LoginView() {
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
                window.location.href = '/Dashboard';
            }
            dispatch(setShow());
        } catch (err: any) {
            dispatch(setShow());
            if (err?.response?.data?.message)
                setPromp(err?.response?.data?.message);
        }
    };
    return (
        <>
            <div className={`${style.auth}`}>
                {isModalShow ? (
                    <ModalComponents props={{ title: 'Login' }}>
                        {promp ? (
                            <p>{promp}</p>
                        ) : (
                            <p>Sign in with your email address</p>
                        )}
                    </ModalComponents>
                ) : null}

                <FormLogin onSubmit={handleLogin} />
            </div>
        </>
    );
}
