import { ScrollShadow } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DashLayout from 'src/Layout/DashLayout';
import HeaderDashboard from 'src/fragments/HeaderDashboard';
import useGet from 'src/hooks/useGet';
import { clearShow, setShow } from 'src/redux/slice/cardShow';
import style from 'src/styles/dashboardStyles/banner.module.css';
import container from 'src/styles/dashboardStyles/dashboard.module.css';
import card from 'src/styles/dashboardStyles/dashboard-card.module.css';
import { Dropdown, Modal } from 'react-bootstrap';
import useDelete from 'src/hooks/useDelete';
import ModalComponents from 'src/components/ModalComponents';
import CreateBanner from 'src/components/elements/Form/CreateBanner';
import { showCreate } from 'src/redux/slice/createShow';
export default function BannerDashboard() {
    const dispatch = useDispatch();
    const { getData } = useGet();
    const [data, setData] = useState<any>([]);
    const { deleteData } = useDelete();
    const isShowDeleted = useSelector((store: any) => store.show.show);
    const isShowCreate = useSelector((store: any) => store.create.create);
    const [confirm, setConfirm] = useState<any>(false);
    useEffect(() => {
        getData('banners').then((res) => {
            setData(res?.data.data);
        });
    }, []);

    const handleConfirm = () => {
        setConfirm(true);
        window.location.reload();
        console.log('confirm');
    };

    const handleCancel = () => {
        !deleteData && setConfirm(false);
        dispatch(clearShow());
    };

    const handleCancelDelete = () => {
        
    };

    const handleDelete = (data: any) => {
        const control = new AbortController();
        deleteData(`delete-banner/${data}`, control.signal).then((res) => {
            if (res?.status === 200) {
                dispatch(setShow());
            }
        });
    };

    return (
        <DashLayout>
            {isShowCreate ? (
                <ModalComponents props={{ title: 'Create Banner' }}>
                    <CreateBanner />
                </ModalComponents>
            ) : null}
            {isShowDeleted && (
                <ModalComponents props={{ title: 'Delete ' }}>
                    <p>are you sure want delete this Banner</p>
                    <button
                        type="button"
                        onClick={() => handleConfirm()}
                        className="btn btn-danger"
                    >
                        Delete
                    </button>
                    <button
                        className="btn btn-secondary"
                        onClick={() => handleCancel()}
                    >
                        Cancel
                    </button>
                </ModalComponents>
            )}
            <div className={container['dashboard-container']}>
                <HeaderDashboard
                    text="Banner"
                    onClick={() => dispatch(showCreate())}
                />
                <ScrollShadow>
                    <div className={card['dashboard-card']}>
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
