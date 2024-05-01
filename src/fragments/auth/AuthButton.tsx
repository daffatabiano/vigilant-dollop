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
            <button type="submit" className={style.google}>
                <Icons.Google style={style.icon} /> {text} with Google
            </button>
        </div>
    );
}
