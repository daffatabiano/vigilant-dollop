import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import ModalComponents from 'src/components/Modals/ModalComponents';
import ModalNotif from 'src/components/Modals/ModalNotif';
import FormLogin from 'src/fragments/auth/FormLogin';
import useAuth from 'src/hooks/useAuth';
import { setShow } from 'src/redux/slice/cardShow';
import style from 'src/styles/auth.module.css';

export default function LoginView() {
    const isModalShow = useSelector((store: any) => store.show.show);
    const { onLogin, onLogout, prompt } = useAuth();
    const [promp, setPromp] = useState<any>('');
    const dispatch = useDispatch();
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        onLogout('user', (res: any) => {
            setData(res);
        });
    }, []);

    if (data.role === 'admin') {
        window.location.href = '/Dashboard';
    } else if (data.role === 'user') {
        setPromp('Just admin can access this page');
        dispatch(setShow());
        window.location.href = '/';
    }

    const handleLogin = async (e: any) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            password: e.target.password.value,
        };
        const res = await onLogin('login', data);
        if (res?.status === 200) {
            localStorage.setItem('token', res?.data?.token);
            dispatch(setShow());
            setPromp(res?.data?.message);
            setTimeout(() => {
                window.location.href = '/Dashboard';
            }, 2000);
        } else {
            dispatch(setShow());
            setPromp(prompt);
        }
    };
    return (
        <>
            <div className={`${style.auth}`}>
                {isModalShow ? (
                    <ModalNotif
                        modal={{
                            head: `${promp ? 'Success' : 'Error'}`,
                            text: `${promp || 'Please Login'}`,
                        }}
                    />
                ) : null}

                <FormLogin onSubmit={handleLogin} />
            </div>
        </>
    );
}
