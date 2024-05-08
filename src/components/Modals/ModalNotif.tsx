import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearShow } from 'src/redux/slice/cardShow';
import styled from 'src/styles/modal-notif.module.css';
import Animation from 'src/utils/aos';

export default function ModalNotif({ modal }: any) {
    const dispatch = useDispatch();
    useEffect(() => {
        Animation();
    });
    return (
        <div className={styled.modal}>
            <div
                data-aos="zoom-in"
                data-aos-once="true"
                className={styled['card-modal']}
            >
                <div className={styled['modal-head']}>
                    <h1>{modal.head}</h1>
                    <h1
                        onClick={() => dispatch(clearShow())}
                        style={{ cursor: 'pointer' }}
                    >
                        X
                    </h1>
                </div>
                <div className={styled['modal-body']}>
                    <p>{modal.text}</p>
                </div>
            </div>
        </div>
    );
}
