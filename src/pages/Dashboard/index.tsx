import { useEffect, useState } from 'react';
import DashLayout from 'src/Layout/DashLayout';
import useAuth from 'src/hooks/useAuth';
import useGet from 'src/hooks/useGet';
import style from 'src/styles/dashboard.module.css';

export default function Dashboard() {
    const { onLogout } = useAuth();
    const { getData } = useGet();
    const [data, setData] = useState<any>([]);
    const [user, setUser] = useState<any>([]);

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
        <DashLayout image="images/logo-tulisan-travel.png">
            <div className={style['dashboard-container']}>
                <div className={style['dashboard-card_header']}>
                    <h1>{data.name}</h1>
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
                    {/* <table className={style['table']}>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user?.map((item: any, index: any) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table> */}
                </div>
            </div>
        </DashLayout>
    );
}
