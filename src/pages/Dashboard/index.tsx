import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DashLayout from 'src/Layout/DashLayout';
import ModalComponents from 'src/components/ModalComponents';
import useAuth from 'src/hooks/useAuth';
import useGet from 'src/hooks/useGet';
import { setShow } from 'src/redux/slice/cardShow';
import style from 'src/styles/dashboard.module.css';

export default function Dashboard() {
    const { onLogout } = useAuth();
    const { getData } = useGet();
    const dispatch = useDispatch();
    const [data, setData] = useState<any>([]);
    const [user, setUser] = useState<any>([]);
    const isShowModal = useSelector((store: any) => store.show.show);

    useEffect(() => {
        onLogout('user', (res: any) => {
            setData(res);
        });
    }, []);

    useEffect(() => {
        onLogout('all-user', (res: any) => {
            setUser(res);
        });
    }, []);

    console.log(user);

    return (
        <DashLayout>
            {isShowModal ? (
                <ModalComponents props={{ title: 'Edit Profile' }}>
                    <FormInput />
                </ModalComponents>
            ) : null}
            <div className={style['dashboard-container']}>
                <div className={style['dashboard-card_header']}>
                    <h1>
                        {data.name}{' '}
                        <span>
                            <button
                                onClick={() => {
                                    dispatch(setShow());
                                }}
                            >
                                <i className="bi bi-pencil-square"> </i> Edit
                            </button>
                        </span>
                    </h1>
                    <img src={data.profilePictureUrl} alt={data.name} />
                </div>
                <div className={style['dashboard-card_header2']}>
                    <p>{data.role}</p>
                    <h1>
                        {data.email} <span>{data.phoneNumber}</span>
                    </h1>
                </div>
                <div className={style['dashboard-card_body']}>
                    <h1>List User</h1>
                </div>
            </div>
        </DashLayout>
    );
}
