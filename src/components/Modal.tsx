import { useSelector } from 'react-redux';

export default function Modal({ message }: any) {
    const isShowModal = useSelector((store: any) => store.toast.isShowModal);
    return (
        <>
            <div
                className={
                    isShowModal
                        ? `toast align-items-center text-bg-primary border-0 top-0 start-50 translate-middle-x`
                        : 'hidden'
                }
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
            >
                <div className="d-flex">
                    <div className="toast-body">
                        <span className="text-white">{message}</span>
                    </div>
                    <button
                        type="button"
                        className="btn-close btn-close-white me-2 m-auto"
                        data-bs-dismiss="toast"
                        aria-label="Close"
                    ></button>
                </div>
            </div>
        </>
    );
}
