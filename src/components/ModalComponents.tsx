import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { clearShow } from 'src/redux/slice/cardShow';
import { clearCreate } from 'src/redux/slice/createShow';
import style from 'src/styles/modal.module.css';

export default function ModalComponents({ props, children }: any) {
    const dispatch = useDispatch();
    return (
        <div className={style.modal}>
            <Modal.Dialog className={style.content}>
                <div className={style['modal-container']}>
                    <Modal.Header className={style.header}>
                        <h1>{props?.title}</h1>
                        <button
                            className="fs-5"
                            onClick={() =>
                                dispatch(clearCreate()) && dispatch(clearShow())
                            }
                        >
                            X
                        </button>
                    </Modal.Header>

                    <Modal.Body>{children}</Modal.Body>
                </div>
            </Modal.Dialog>
        </div>
    );
}
