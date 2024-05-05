import Icons from 'src/components/elements/SvgIcons';
import style from 'src/styles/auth.module.css';

type Button = {
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    text: 'Login' | 'Register';
};

export default function AuthButton(props: Button) {
    const { text, type = 'button', onClick } = props;
    return (
        <div className={style.button}>
            <button onClick={onClick} type={type}>
                {text}
            </button>
            <button
                type="button"
                onClick={() => (window.location.href = '/destination')}
                className={style.google}
            >
                <i className={`bi bi-person ${style.icon}`}></i> Enter As Guest
            </button>
        </div>
    );
}
