import { ScrollShadow } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DashLayout from 'src/Layout/DashLayout';
import useGet from 'src/hooks/useGet';
import { clearShow, setShow } from 'src/redux/slice/cardShow';
import container from 'src/styles/dashboardStyles/dashboard.module.css';
import { Dropdown } from 'react-bootstrap';
import useDelete from 'src/hooks/useDelete';
import ModalComponents from 'src/components/Modals/ModalComponents';
import CreateBanner from 'src/components/elements/Form/CreateBanner';
import { showCreate } from 'src/redux/slice/createShow';
import style from 'src/styles/dashboardStyles/dashboard.module.css';
import HeadersDashboard from 'src/components/HeadersDashboard';
import ModalNotif from 'src/components/Modals/ModalNotif';
import LoadingPage from 'src/fragments/loading';

export default function BannerDashboard() {
    const dispatch = useDispatch();
    const { getData } = useGet();
    const [data, setData] = useState<any>([]);
    const { deleteData } = useDelete();
    const isShowDeleted = useSelector((store: any) => store.show.show);
    const isShowCreate = useSelector((store: any) => store.create.create);
    const isShowLogout = useSelector((store: any) => store.logout.logout);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [promp, setPromp] = useState<any>('');
    useEffect(() => {
        getData('banners').then((res) => {
            setData(res?.data.data);
        });
    }, []);

    const handleDelete = (data: any) => {
        const control = new AbortController();
        deleteData(`delete-banner/${data}`, control.signal).then((res) => {
            if (res?.status === 200) {
                setIsLoading(true);
                setPromp(res?.data?.message);
                setTimeout(() => {
                    dispatch(setShow());
                    window.location.reload();
                    setIsLoading(false);
                }, 2500);
                dispatch(clearShow());
            }
        });
    };
    console.log(promp);

    return (
        <DashLayout>
            {isShowLogout && (
                <ModalNotif
                    modal={{
                        head: 'Logout Success',
                        text: 'You have been logged out, thank you for goodbye! 😊',
                    }}
                />
            )}
            {isLoading && <LoadingPage />}
            {isShowCreate ? (
                <ModalComponents props={{ title: 'Create Banner' }}>
                    <CreateBanner />
                </ModalComponents>
            ) : null}
            {isShowDeleted && (
                <ModalNotif modal={{ head: 'Delete Banners', text: promp }} />
            )}
            <div className={container['dashboard-container-activity']}>
                <HeadersDashboard
                    text="Banners"
                    onClick={() => dispatch(showCreate())}
                />
                <ScrollShadow className={style.scroll}>
                    <div className={style['activity-card_body']}>
                        {data.map((item: any) => (
                            <div key={item.id}>
                                <div>
                                    <Dropdown>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>
                                                <button
                                                    onClick={() =>
                                                        (window.location.href = `/Dashboard/pages/Banner/${item.id}`)
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
                                    <img src={item.imageUrl} alt="banner" />
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollShadow>
            </div>
        </DashLayout>
    );
}
