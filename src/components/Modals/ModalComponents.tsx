import { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { clearShow } from 'src/redux/slice/cardShow';
import { clearCreate } from 'src/redux/slice/createShow';
import style from 'src/styles/modal.module.css';
import Animation from 'src/utils/aos';

export default function ModalComponents({ props, children }: any) {
    const dispatch = useDispatch();
    useEffect(() => {
        Animation();
    });
    return (
        <div className={style.modal}>
            <Modal.Dialog className={style.content}>
                <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className={style['modal-container']}
                >
                    <Modal.Header className={style.header}>
                        <h1>{props?.title}</h1>
                        <button
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
