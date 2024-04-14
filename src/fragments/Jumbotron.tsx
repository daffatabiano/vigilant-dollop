import auth from '@/styles/auth.module.css';

export default function Jumbotron({ picture }: any) {
    return (
        <div className={`position-relative w-100 ${auth['jumbotron']}`}>
            <div
                className={`z-1 position-absolute top-50 start-50 translate-middle container d-flex flex-column text-black `}
            >
                <h1 className=" font-bold">Fluid jumbotron</h1>
                <p className="lead">
                    This is a modified jumbotron that occupies the entire
                    horizontal space of its parent.
                </p>
            </div>
            <div>
                <img
                    className="img-fluid position-absolute z-0 w-100"
                    src={picture}
                    alt="to-ravel-find-freedom"
                />
            </div>
        </div>
    );
}
