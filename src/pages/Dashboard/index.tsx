import { Accordion, AccordionItem, ScrollShadow } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DashLayout from 'src/Layout/DashLayout';
import ModalComponents from 'src/components/ModalComponents';
import Pagination from 'src/components/Pagination';
import EditForm from 'src/components/elements/Form/EditProfile';
import useAuth from 'src/hooks/useAuth';
import useGet from 'src/hooks/useGet';
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
    const { getData } = useGet();
    const router = useRouter();
    const [idUser, setIdUser] = useState<any>([]);
    const { post } = usePost();
    const [activity, setActivity] = useState<any>([]);
    const [promo, setPromo] = useState<any>([]);
    const [page, setPage] = useState(1);
    const itemsPerPage = 8;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const totalPages = Math.ceil(user.length / itemsPerPage);

    if (data.role === 'user') {
        router.push('/');
    }

    const showChangeRole = (e: any) => {
        setIdUser(e);
        dispatch(showCreate());
        console.log(e);
    };

    const handleRole = async () => {
        const selectRole = document.getElementById('role') as HTMLSelectElement;
        const data = {
            role: selectRole.value,
        };
        try {
            const res = await post(`update-user-role/${idUser}`, data);
            if (res?.status === 200) {
                window.location.reload();
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
            setIdUser(res?.map((item: any) => item.id));
        });
        getData('activities').then((res: any) => {
            setActivity(res?.data?.data);
        });
        getData('promos').then((res: any) => {
            setPromo(res?.data?.data);
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
                                    Edit
                                </i>
                            </button>
                        </span>
                    </h1>
                    <div className={style['information']}>
                        <p>
                            <i className="bi bi-suitcase-lg text-warning"></i>
                            {activity?.length}
                        </p>
                        <p>
                            <i className="bi bi-people  text-warning"></i>
                            {user?.length}
                        </p>
                        <p>
                            <i className="bi bi-ticket-perforated text-warning"></i>
                            {promo?.length}
                        </p>
                    </div>
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
                            {user
                                ?.slice(startIndex, endIndex)
                                .map((item: any, index: number) => (
                                    <Accordion
                                        className={style.border}
                                        key={item.id}
                                    >
                                        <AccordionItem
                                            textValue={`${index + 1}. ${
                                                item.name
                                            }`}
                                            title={
                                                <div
                                                    className={
                                                        style['accordion-title']
                                                    }
                                                >
                                                    <img
                                                        src={
                                                            item.profilePictureUrl
                                                                ? item.profilePictureUrl
                                                                : `https://placehold.jp/30/dd6699/ffffff/50x50.png?text=${item.name.slice(
                                                                      0,
                                                                      2
                                                                  )}`
                                                        }
                                                        onError={() =>
                                                            `https://placehold.jp/30/dd6699/ffffff/300x150.png?text=${item.name.slice(
                                                                0,
                                                                1
                                                            )}`
                                                        }
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
                                                className={
                                                    style['accordion-body']
                                                }
                                            >
                                                <h1>{index + 1}</h1>

                                                <ul>
                                                    <li className="text-muted">
                                                        {item.email}
                                                    </li>
                                                    <li className="text-muted">
                                                        {item.phoneNumber}
                                                    </li>
                                                    <li
                                                        className={`fw-bold text-primary ${style['button-edit']}`}
                                                    >
                                                        {isShowRole ? (
                                                            <form
                                                                onSubmit={
                                                                    handleRole
                                                                }
                                                            >
                                                                <select
                                                                    name="role"
                                                                    id="role"
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
                                                                    onClick={
                                                                        handleRole
                                                                    }
                                                                    className={
                                                                        style[
                                                                            'button-edit-role'
                                                                        ]
                                                                    }
                                                                >
                                                                    OK
                                                                </button>
                                                            </form>
                                                        ) : (
                                                            <div className="text-primary">
                                                                {item.role}
                                                            </div>
                                                        )}
                                                        {'  '}
                                                        <div>
                                                            <button
                                                                onClick={() =>
                                                                    showChangeRole(
                                                                        item.id
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
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </AccordionItem>
                                    </Accordion>
                                ))}
                        </div>
                    </ScrollShadow>
                </div>
                <div className={style.pagination}>
                    <Pagination
                        page={page}
                        setPage={setPage}
                        pages={totalPages}
                    ></Pagination>
                </div>
            </div>
        </DashLayout>
    );
}
