import style from 'src/styles/auth.module.css';
import InputAuth from '../InputAuth';
import AuthComponents from '..';
import CheckBox from './CheckBox';
import Additions from '../Additions';
import AuthButton from '../AuthButton';
type Props = {
    onSubmit: any;
};

export default function FormLogin(props: Props) {
    const { onSubmit } = props;

    return (
        <AuthComponents
            title="Login"
            titleSpan="Sign in with your email address"
            images="/images/login.png"
        >
            <form onSubmit={onSubmit}>
                <div className={style['form-input']}>
                    <InputAuth label="Email" name="email" placeholder="Email" />
                    <InputAuth
                        label="Password"
                        name="password"
                        placeholder="Password"
                        type="Password"
                    />
                    <CheckBox />
                    <AuthButton text="Login" type="submit" />
                    <Additions
                        directMessage="Register"
                        message="Don't have an account?"
                        direct="/auth/register"
                    />
                </div>
            </form>
        </AuthComponents>
    );
}
