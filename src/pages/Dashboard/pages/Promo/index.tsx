import { useDispatch, useSelector } from 'react-redux';
import DashLayout from 'src/Layout/DashLayout';
import HeaderDashboard from 'src/fragments/HeaderDashboard';
import { clearShow, setShow } from 'src/redux/slice/cardShow';
import style from 'src/styles/dashboardStyles/promo.module.css';
import container from 'src/styles/dashboardStyles/dashboard.module.css';
import useGet from 'src/hooks/useGet';
import { useEffect, useState } from 'react';
import { ScrollShadow } from '@nextui-org/react';
import { Dropdown } from 'react-bootstrap';
import useDelete from 'src/hooks/useDelete';
import ModalComponents from 'src/components/ModalComponents';
import { showCreate } from 'src/redux/slice/createShow';
import CreatePromo from 'src/components/elements/Form/CreatePromo';

export default function PromoDashboard() {
    const isShowModalDelete = useSelector((store: any) => store.show.show);
    const isShowCreate = useSelector((store: any) => store.create.create);
    const dispatch = useDispatch();
    const { getData } = useGet();
    const [data, setData] = useState<any>([]);
    const { deleteData } = useDelete();
    const [confirm, setConfirm] = useState<any>(false);

    const handleConfirm = () => {
        setConfirm(true);
        window.location.reload();
        console.log('confirm');
    };

    const handleCancel = () => {
        !deleteData && setConfirm(false);
    };

    const handleDelete = (data: any) => {
        const control = new AbortController();

        deleteData(`delete-promo/${data}`, control.signal).then((res) => {
            if (res?.status === 200) {
                dispatch(setShow());
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
            {isShowModalDelete && (
                <ModalComponents {...{ props: { title: 'Delete Promo' } }}>
                    <p>Are you sure you want to delete this promo?</p>
                    <button
                        onClick={() => handleConfirm()}
                        className="btn btn-danger"
                    >
                        Delete
                    </button>
                    <button
                        onClick={() => handleCancel()}
                        className="btn btn-secondary"
                    >
                        Cancel
                    </button>
                </ModalComponents>
            )}
            {isShowCreate && (
                <ModalComponents {...{ props: { title: 'Create Promo' } }}>
                    <CreatePromo />
                </ModalComponents>
            )}
            <div className={container['dashboard-container']}>
                <HeaderDashboard
                    text="Promo"
                    onClick={() => dispatch(showCreate())}
                />
                <ScrollShadow>
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
                            <p>{item.title}</p>
                        </div>
                    ))}
                </ScrollShadow>
            </div>
        </DashLayout>
    );
}
