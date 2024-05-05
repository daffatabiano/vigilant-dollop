import style from 'src/styles/auth.module.css';
import { useEffect } from 'react';
import Animation from 'src/utils/aos';

type Components = {
    title: string;
    titleSpan: string;
    children: JSX.Element;
    images: string;
};

export default function AuthComponents(props: Components) {
    const { title, titleSpan, children, images } = props;
    useEffect(() => {
        Animation();
    });
    return (
        <div className={style.auth}>
            <div className={style.form}>
                <div className={style.title}>
                    <h1 data-aos="fade-left" data-aos-once="true">
                        {title}
                        <span>{titleSpan}</span>
                    </h1>
                    <img
                        data-aos="fade-right"
                        data-aos-once="true"
                        src={images}
                        alt="login-to-ravel-find-freedom"
                    />
                </div>
                {children}
            </div>
        </div>
    );
}
