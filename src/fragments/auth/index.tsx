import style from 'src/styles/auth.module.css';
import FromAuth from './FormLogin';

type Components = {
    title: string;
    titleSpan: string;
    children: JSX.Element;
};

export default function AuthComponents(props: Components) {
    const { title, titleSpan, children } = props;

    return (
        <div className={style.auth}>
            <div className={style.form}>
                <h1>
                    {title}
                    <span>{titleSpan}</span>
                </h1>
                {children}
            </div>
        </div>
    );
}
