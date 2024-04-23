import { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import DashLayout from 'src/Layout/DashLayout';
import ModalComponents from 'src/components/ModalComponents';
import CreateActivity from 'src/components/elements/Form/CreateActivity';
import HeaderDashboard from 'src/fragments/HeaderDashboard';
import useDelete from 'src/hooks/useDelete';
import useGet from 'src/hooks/useGet';
import { setShow } from 'src/redux/slice/cardShow';
import style from 'src/styles/dashboard.module.css';

export default function ActivityDashboard() {
    const isShowModal = useSelector((store: any) => store.show.show);
    const dispatch = useDispatch();
    const { getData } = useGet();
    const { deleteData } = useDelete();
    const [data, setData] = useState([]);

    const handleDelete = (data: any) => {
        deleteData(`delete-activity/${data}`).then((res) => {
            if (res?.status === 200) {
                window.location.reload();
            }
        });
    };

    useEffect(() => {
        getData('activities').then((res: any) => {
            setData(res?.data.data);
        });
    }, []);

    return (
        <DashLayout image="images/logo-tulisan-travel.png">
            {isShowModal ? (
                <ModalComponents props={{ title: 'Create Activity' }}>
                    <CreateActivity />
                </ModalComponents>
            ) : null}
            <div className={style['dashboard-container']}>
                <HeaderDashboard
                    onClick={() => dispatch(setShow())}
                    text="Activity"
                />
                <div className={style['dashboard-card_body']}>
                    {data.map((item: any) => (
                        <div key={item.id}>
                            <div>
                                <img src={item.imageUrls[0]} alt={item.name} />
                                <p>{item.title}</p>
                            </div>
                            <div>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        variant="success"
                                        id="dropdown-basic"
                                    >
                                        Dropdown Button
                                    </Dropdown.Toggle>

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
                                        <Dropdown.Item href="#/action-2">
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
                                        <Dropdown.Item
                                            disabled
                                            href="#/action-3"
                                        >
                                            Something else
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </DashLayout>
    );
}
