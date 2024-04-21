import { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import DashLayout from 'src/Layout/DashLayout';
import ModalComponents from 'src/components/ModalComponents';
import useGet from 'src/hooks/useGet';
import { setShow } from 'src/redux/slice/cardShow';
import style from 'src/styles/dashboard.module.css';

export default function ActivityDashboard() {
    const isShowModal = useSelector((store: any) => store.show.show);
    const dispatch = useDispatch();
    const { getData } = useGet();
    const [data, setData] = useState([]);
    console.log(isShowModal);

    useEffect(() => {
        getData('activities').then((res: any) => {
            setData(res?.data.data);
        });
    }, []);
    console.log(data);
    return (
        <DashLayout image="images/logo-tulisan-travel.png">
            {isShowModal ? (
                <ModalComponents title="Edit Activity">
                    <form onsSubmit={}>
                        <label htmlFor="">name</label>
                        <input type="text" />
                    </form>
                </ModalComponents>
            ) : null}
            <div className={style['dashboard-container']}>
                <div className={style['dashboard-card_header']}>
                    <h1>Activity </h1>
                </div>
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
                                                    dispatch(setShow())
                                                }
                                            >
                                                edit
                                            </button>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">
                                            Another action
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
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
