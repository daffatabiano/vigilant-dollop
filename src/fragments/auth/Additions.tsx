import { Link } from 'react-alice-carousel';
import style from 'src/styles/auth.module.css';
type Additions = {
    message: string;
    direct: any;
    directMessage: string;
};

export default function Additions(props: Additions) {
    const { message, direct, directMessage } = props;
    return (
        <>
            <p className={style.addition}>
                {message}
                <Link href={direct}>{directMessage}</Link>
            </p>
        </>
    );
}
