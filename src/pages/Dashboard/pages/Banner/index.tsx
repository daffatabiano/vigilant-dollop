import { ScrollShadow } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DashLayout from 'src/Layout/DashLayout';
import HeaderDashboard from 'src/fragments/HeaderDashboard';
import useGet from 'src/hooks/useGet';
import { clearShow, setShow } from 'src/redux/slice/cardShow';
import container from 'src/styles/dashboardStyles/dashboard.module.css';
import { Dropdown } from 'react-bootstrap';
import useDelete from 'src/hooks/useDelete';
import ModalComponents from 'src/components/ModalComponents';
import CreateBanner from 'src/components/elements/Form/CreateBanner';
import { showCreate } from 'src/redux/slice/createShow';
import style from 'src/styles/dashboardStyles/dashboard.module.css';

export default function BannerDashboard() {
    const dispatch = useDispatch();
    const { getData } = useGet();
    const [data, setData] = useState<any>([]);
    const { deleteData } = useDelete();
    const isShowDeleted = useSelector((store: any) => store.show.show);
    const isShowCreate = useSelector((store: any) => store.create.create);
    const [confirm, setConfirm] = useState<any>(false);
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
                dispatch(setShow());
                setPromp(res?.data?.message);
            }
        });
    };
    console.log(promp);

    return (
        <DashLayout>
            {isShowCreate ? (
                <ModalComponents props={{ title: 'Create Banner' }}>
                    <CreateBanner />
                </ModalComponents>
            ) : null}
            {isShowDeleted && (
                <ModalComponents props={{ title: 'Delete ' }}>
                    <div className={style['modal-delete']}>
                        <p>{promp}</p>
                        <button
                            className="btn btn-danger "
                            onClick={() =>
                                dispatch(clearShow()) &&
                                window.location.reload()
                            }
                        >
                            CLOSE
                        </button>
                    </div>
                </ModalComponents>
            )}
            <div className={container['dashboard-container-activity']}>
                <HeaderDashboard
                    text="Banner"
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
