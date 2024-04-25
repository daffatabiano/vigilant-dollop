import { ScrollShadow } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import DashLayout from 'src/Layout/DashLayout';
import ModalComponents from 'src/components/ModalComponents';
import CreateCategory from 'src/components/elements/Form/CreateCategory';
import HeaderDashboard from 'src/fragments/HeaderDashboard';
import useDelete from 'src/hooks/useDelete';
import useGet from 'src/hooks/useGet';
import { clearShow, setShow } from 'src/redux/slice/cardShow';
import { showCreate } from 'src/redux/slice/createShow';
import style from 'src/styles/dashboardStyles/category.module.css';
import container from 'src/styles/dashboardStyles/dashboard.module.css';

export default function CategoryDashboard() {
    const isShowDeleted = useSelector((store: any) => store.show.show);
    const isShowCreated = useSelector((store: any) => store.create.create);
    const dispatch = useDispatch();
    const { getData } = useGet();
    const [data, setData] = useState<any>([]);
    const { deleteData } = useDelete();
    const [isDeleting, setIsDeleting] = useState<any>(false);

    useEffect(() => {
        getData('categories').then((res: any) => {
            setData(res?.data.data);
        });
    }, []);

    const handleDelete = async (id: any) => {
        const control = new AbortController();

        try {
            setIsDeleting(true);
            const res = await deleteData(
                `delete-category/${id}`,
                control.signal
            );
            if (res?.status === 200) {
                setIsDeleting(false);
                dispatch(setShow());
            }
        } catch (err: any) {
            setIsDeleting(false);
            console.log(err?.response?.data?.message);
        } finally {
            control.abort();
        }
    };

    console.log(data.id);

    return (
        <DashLayout image="images/logo-tulisan-travel.png">
            {isShowCreated ? (
                <ModalComponents
                    props={{
                        title: 'Create Category',
                    }}
                >
                    <CreateCategory />
                </ModalComponents>
            ) : null}

            {isShowDeleted && (
                <ModalComponents props={{ title: 'Delete ' }}>
                    <p>are you sure want delete this Banner</p>
                    <button
                        type="button"
                        className="btn btn-danger"
                        disabled={isDeleting}
                        onClick={() => handleDelete(data.id)}
                    >
                        Delete
                    </button>
                </ModalComponents>
            )}
            <div className={container['dashboard-container']}>
                <HeaderDashboard
                    text="Category"
                    onClick={() => dispatch(showCreate())}
                />
                <ScrollShadow>
                    <div className={style['dashboard-card']}>
                        {data.map((item: any) => (
                            <div key={item.id}>
                                <div>
                                    <Dropdown>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>
                                                <button
                                                    onClick={() =>
                                                        (window.location.href = `/Dashboard/pages/Category/${item.id}`)
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
