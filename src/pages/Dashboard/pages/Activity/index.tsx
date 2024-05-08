import { ScrollShadow } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import DashLayout from 'src/Layout/DashLayout';
import HeadersDashboard from 'src/components/HeadersDashboard';
import ModalComponents from 'src/components/Modals/ModalComponents';
import CreateActivity from 'src/components/elements/Form/CreateActivity';
import useDelete from 'src/hooks/useDelete';
import useGet from 'src/hooks/useGet';
import { clearShow, setShow } from 'src/redux/slice/cardShow';
import { showCreate } from 'src/redux/slice/createShow';
import style from 'src/styles/dashboardStyles/dashboard.module.css';

export default function ActivityDashboard() {
    const isShowCreate = useSelector((store: any) => store.create.create);
    const isShowDelete = useSelector((store: any) => store.show.show);
    const dispatch = useDispatch();
    const { getData } = useGet();
    const { deleteData } = useDelete();
    const [data, setData] = useState<any>([]);
    const [promp, setPromp] = useState<string>('');

    const handleDelete = (id: any) => {
        const control = new AbortController();

        deleteData(`delete-activity/${id}`, control.signal).then((res) => {
            if (res?.status === 200) {
                setPromp(res?.data?.message);
                console.log(res?.data.message);
                dispatch(setShow());
            }
        });
    };

    useEffect(() => {
        getData('activities').then((res: any) => {
            setData(res?.data.data);
        });
    }, []);

    return (
        <DashLayout>
            {isShowCreate ? (
                <ModalComponents props={{ title: 'Create Activity' }}>
                    <CreateActivity />
                </ModalComponents>
            ) : null}
            {isShowDelete && (
                <ModalComponents props={{ title: 'Delete Activity' }}>
                    <div className={style['modal-delete']}>
                        {promp && <p>{promp}</p>}
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
            <div className={style['dashboard-container-activity']}>
                <HeadersDashboard
                    text="Activity"
                    onClick={() => dispatch(showCreate())}
                />
                <ScrollShadow className={style['scroll']}>
                    <div className={style['activity-card_body']}>
                        {data.map((item: any) => (
                            <div key={item.id}>
                                <div>
                                    <Dropdown>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>
                                                <button
                                                    onClick={() =>
                                                        (window.location.href = `/Dashboard/pages/Activity/${item.id}`)
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
                                    <img
                                        src={item.imageUrls[0]}
                                        alt={item.name}
                                    />
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollShadow>
            </div>
        </DashLayout>
    );
}
