import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { clearShow } from 'src/redux/slice/cardShow';

export default function ModalComponents({ props, children }: any) {
    const dispatch = useDispatch();
    return (
        <>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>{props?.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>{children}</Modal.Body>

                <Modal.Footer>
                    <button
                        onClick={() => {
                            dispatch(clearShow());
                        }}
                    >
                        close
                    </button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </>
    );
}
