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
    const { onLogin, prompt } = useAuth();
    const [promp, setPromp] = useState<any>('');
    const dispatch = useDispatch();

    const handleLogin = async (e: any) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            password: e.target.password.value,
        };
        const res = await onLogin('login', data);
        if (res?.status === 200) {
            localStorage.setItem('token', res?.data?.token);
            setPromp(res?.data?.message);
            window.location.href = '/Dashboard';
            dispatch(setShow());
        } else {
            dispatch(setShow());
            setPromp(prompt);
        }
    };
    return (
        <>
            <div className={`${style.auth}`}>
                {isModalShow && (
                    <ModalComponents props={{ title: 'Login' }}>
                        <p>{promp}</p>
                    </ModalComponents>
                )}

                <FormLogin onSubmit={handleLogin} />
            </div>
        </>
    );
}
