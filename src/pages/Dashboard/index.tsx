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
import { clearCreate, showCreate } from 'src/redux/slice/createShow';
import style from 'src/styles/dashboardStyles/dashboard.module.css';

export default function Dashboard() {
    const { onLogout } = useAuth();
    const dispatch = useDispatch();
    const [data, setData] = useState<any>([]);
    const [user, setUser] = useState<any>([]);
    const isShowModal = useSelector((store: any) => store.show.show);
    const isShowRole = useSelector((store: any) => store.create.create);
    const router = useRouter();
    const [idUser, setIdUser] = useState<any>([]);
    const { post } = usePost();

    const handleRole = async (e: any) => {
        e.preventDefault();
        try {
            const res = await post(`update-user-role/${e}`, {
                role: e.target.role.value,
            });
            console.log(res, 'res');
            if (res?.status === 200) {
                // window.location.reload();
            }
        } catch (err: any) {
            console.log(err?.response?.data?.message);
        }
    };
    useEffect(() => {
        onLogout('user', (res: any) => {
            setData(res);
        });
    }, []);

    useEffect(() => {
        onLogout('all-user', (res: any) => {
            setUser(res);
            console.log(
                res?.map((item: any) => item.id),
                'user Id'
            );
            setIdUser(res?.map((item: any) => item.id));
        });
    }, []);
    // console.log(changeRole);

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
                                                    src={
                                                        item.profilePictureUrl ||
                                                        ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ0-82ELFvRIrelvLXTK7rKvja6eGcLn82vyqEO7Zpwg&s' &&
                                                            `https://placehold.jp/30/dd6699/ffffff/300x150.png?text=${item.name.slice(
                                                                0,
                                                                2
                                                            )}`)
                                                    }
                                                    // onError={() =>
                                                    //     `https://placehold.jp/30/dd6699/ffffff/300x150.png?text=${item.name.slice(
                                                    //         0,
                                                    //         1
                                                    //     )}`
                                                    // }
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
                                                    {isShowRole ? (
                                                        <form
                                                            onSubmit={
                                                                handleRole
                                                            }
                                                        >
                                                            <select
                                                                name="role"
                                                                id="role"
                                                                onSubmit={
                                                                    handleRole
                                                                }
                                                                defaultValue={
                                                                    item.role
                                                                }
                                                                className="form-select text-muted"
                                                            >
                                                                <option
                                                                    className="text-black"
                                                                    value="admin"
                                                                >
                                                                    Admin
                                                                </option>
                                                                <option
                                                                    className="text-black"
                                                                    value="user"
                                                                >
                                                                    User
                                                                </option>
                                                            </select>
                                                            <button
                                                                type="submit"
                                                                className="btn btn-primary"
                                                            >
                                                                ok
                                                            </button>
                                                        </form>
                                                    ) : (
                                                        <div className="text-primary">
                                                            {item.role}
                                                        </div>
                                                    )}
                                                    {'  '}
                                                    <button
                                                        onClick={() =>
                                                            dispatch(
                                                                showCreate()
                                                            )
                                                        }
                                                    >
                                                        <i className="bi bi-pencil text-primary"></i>
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            dispatch(
                                                                clearCreate()
                                                            )
                                                        }
                                                    >
                                                        <i className="bi bi-x-circle text-danger"></i>
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
