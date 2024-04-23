import { Accordion, AccordionItem, ScrollShadow } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DashLayout from 'src/Layout/DashLayout';
import ModalComponents from 'src/components/ModalComponents';
import EditForm from 'src/components/elements/Form/EditProfile';
import useAuth from 'src/hooks/useAuth';
import usePost from 'src/hooks/usePost';
import { setShow } from 'src/redux/slice/cardShow';
import style from 'src/styles/dashboard.module.css';

export default function Dashboard() {
    const { onLogout } = useAuth();
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
            console.log(res);
        });
    }, []);

    return (
        <DashLayout>
            {isShowModal ? (
                <ModalComponents props={{ title: 'Edit Profile' }}>
                    <EditForm />
                </ModalComponents>
            ) : null}
            <div className={style['dashboard-container']}>
                <div className={style['dashboard-card_header']}>
                    <h1>
                        {data.name}{' '}
                        <span className={style['button-edit']}>
                            <button
                                onClick={() => {
                                    dispatch(setShow());
                                }}
                            >
                                <i className="bi bi-pencil-square text-blue-500">
                                    {' '}
                                </i>{' '}
                                Edit
                            </button>
                        </span>
                    </h1>
                    <img src={data.profilePictureUrl} alt={data.name} />
                </div>
                <div className={style['dashboard-card_header2']}>
                    <p>{data.role}</p>
                    <h1>
                        {data.email} <span>+62 {data.phoneNumber}</span>
                    </h1>
                </div>
                <div className={style['dashboard-card_body']}>
                    <h1>User Control</h1>
                    <ScrollShadow className={style['scroll-shadow']}>
                        <div className={style['accordion']}>
                            {user.map((item: any, index: number) => (
                                <Accordion
                                    className={style.border}
                                    key={item.id}
                                >
                                    <AccordionItem
                                        textValue={`${index + 1}. ${item.name}`}
                                        title={
                                            <div
                                                className={
                                                    style['accordion-title']
                                                }
                                            >
                                                <img
                                                    src={item.profilePictureUrl}
                                                    alt={item.name}
                                                />
                                                <p>{item.name}</p>
                                            </div>
                                        }
                                        indicator={({ isOpen }) =>
                                            isOpen ? (
                                                <i className="bi bi-dash-circle"></i>
                                            ) : (
                                                <i className="bi bi-plus-circle"></i>
                                            )
                                        }
                                    >
                                        <div
                                            className={style['accordion-body']}
                                        >
                                            <ul>
                                                <li className="text-muted">
                                                    {item.email}
                                                </li>
                                                <li className="text-muted">
                                                    {item.phoneNumber}
                                                </li>
                                                <li className="fw-bold text-primary">
                                                    {item.role}
                                                    {'  '}
                                                    <button>
                                                        <i className="bi bi-pencil text-primary"></i>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </AccordionItem>
                                </Accordion>
                            ))}
                        </div>
                    </ScrollShadow>
                </div>
            </div>
        </DashLayout>
    );
}
