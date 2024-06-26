import { useDispatch, useSelector } from 'react-redux';
import DashLayout from 'src/Layout/DashLayout';
import { clearShow, setShow } from 'src/redux/slice/cardShow';
import style from 'src/styles/dashboardStyles/dashboard.module.css';
import useGet from 'src/hooks/useGet';
import { useEffect, useState } from 'react';
import { ScrollShadow } from '@nextui-org/react';
import { Dropdown } from 'react-bootstrap';
import useDelete from 'src/hooks/useDelete';
import ModalComponents from 'src/components/Modals/ModalComponents';
import { showCreate } from 'src/redux/slice/createShow';
import CreatePromo from 'src/components/elements/Form/CreatePromo';
import HeadersDashboard from 'src/components/HeadersDashboard';
import LoadingPage from 'src/fragments/loading';
import ModalNotif from 'src/components/Modals/ModalNotif';

export default function PromoDashboard() {
    const isShowModalDelete = useSelector((store: any) => store.show.show);
    const isShowCreate = useSelector((store: any) => store.create.create);
    const isShowLogout = useSelector((store: any) => store.logout.logout);
    const dispatch = useDispatch();
    const { getData } = useGet();
    const [data, setData] = useState<any>([]);
    const { deleteData } = useDelete();
    const [promp, setPromp] = useState<any>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleDelete = (data: any) => {
        const control = new AbortController();
        deleteData(`delete-promo/${data}`, control.signal).then((res) => {
            if (res?.status === 200) {
                setIsLoading(true);
                setPromp(res?.data?.message);
                setTimeout(() => {
                    dispatch(setShow());
                    window.location.reload();
                    setIsLoading(false);
                }, 2000);
            }
        });
    };

    useEffect(() => {
        getData('promos').then((res: any) => {
            setData(res?.data?.data);
        });
    }, []);
    return (
        <DashLayout image="images/logo-tulisan-travel.png">
            {isShowLogout && (
                <ModalNotif
                    modal={{
                        head: 'Logout Success',
                        text: 'You have been logged out, thank you for goodbye! 😊',
                    }}
                />
            )}
            s{isLoading && <LoadingPage />}
            {isShowModalDelete && (
                <ModalNotif modal={{ head: 'Promo Delete', text: promp }} />
            )}
            {isShowCreate && (
                <ModalComponents {...{ props: { title: 'Create Promo' } }}>
                    <CreatePromo />
                </ModalComponents>
            )}
            <div className={style['dashboard-container-activity']}>
                <HeadersDashboard
                    text="Promos"
                    onClick={() => dispatch(showCreate())}
                />
                <ScrollShadow className={style.scroll}>
                    <div className={style['activity-card_body']}>
                        {data.map((item: any) => (
                            <div key={item.id}>
                                <Dropdown>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>
                                            <button
                                                onClick={() =>
                                                    (window.location.href = `/Dashboard/pages/Promo/${item.id}`)
                                                }
                                            >
                                                Edit
                                            </button>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <button
                                                className="text-red-500"
                                                onClick={() =>
                                                    handleDelete(item.id)
                                                }
                                            >
                                                Delete
                                            </button>
                                        </Dropdown.Item>
                                        <hr className="dropdown-divider" />
                                        <Dropdown.Item disabled>
                                            Something else
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                    <Dropdown.Toggle
                                        // variant="light"
                                        style={{
                                            backgroundColor: 'transparent',
                                            border: 'none',
                                            position: 'absolute',
                                            right: '0',
                                            top: '0',
                                        }}
                                        id="dropdown-basic"
                                    >
                                        ...
                                    </Dropdown.Toggle>
                                </Dropdown>
                                <img src={item.imageUrl} alt="promo" />
                            </div>
                        ))}
                    </div>
                </ScrollShadow>
            </div>
        </DashLayout>
    );
}
