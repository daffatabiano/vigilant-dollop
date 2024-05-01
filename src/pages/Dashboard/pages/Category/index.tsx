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
import style from 'src/styles/dashboardStyles/dashboard.module.css';

export default function CategoryDashboard() {
    const isShowDeleted = useSelector((store: any) => store.show.show);
    const isShowCreated = useSelector((store: any) => store.create.create);
    const dispatch = useDispatch();
    const { getData } = useGet();
    const [data, setData] = useState<any>([]);
    const { deleteData } = useDelete();
    const [isDeleting, setIsDeleting] = useState<any>(false);
    const [prompt, setPrompt] = useState<any>('');

    useEffect(() => {
        getData('categories').then((res: any) => {
            setData(res?.data.data);
        });
    }, []);

    const handleDelete = (data: any) => {
        const control = new AbortController();

        deleteData(`delete-category/${data}`, control.signal).then((res) => {
            if (res?.status === 200) {
                dispatch(setShow());
                setPrompt(res?.data?.message);
            }
        });
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
                    <p>{prompt}</p>
                    <button
                        type="button"
                        className="btn btn-danger"
                        disabled={isDeleting}
                        onClick={() => window.location.reload()}
                    >
                        Delete
                    </button>
                </ModalComponents>
            )}
            <div className={style['dashboard-container-activity']}>
                <HeaderDashboard
                    text="Category"
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
