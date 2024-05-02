import style from 'src/styles/auth.module.css';
import FromAuth from './FormLogin';

type Components = {
    title: string;
    titleSpan: string;
    children: JSX.Element;
    images: string;
};

export default function AuthComponents(props: Components) {
    const { title, titleSpan, children, images } = props;

    return (
        <div className={style.auth}>
            <div className={style.form}>
                <div className={style.title}>
                    <h1>
                        {title}
                        <span>{titleSpan}</span>
                    </h1>
                    <img src={images} alt="login-to-ravel-find-freedom" />
                </div>
                {children}
            </div>
        </div>
    );
}
