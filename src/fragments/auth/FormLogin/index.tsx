import style from 'src/styles/auth.module.css';
import InputAuth from '../InputAuth';
import AuthComponents from '..';
import CheckBox from './CheckBox';
import Additions from '../Additions';
import AuthButton from '../AuthButton';
import { useEffect } from 'react';
import Animation from 'src/utils/aos';
type Props = {
    onSubmit: any;
};

export default function FormLogin(props: Props) {
    const { onSubmit } = props;
    useEffect(() => {
        Animation();
    });
    return (
        <AuthComponents
            title="Login"
            titleSpan="Sign in with your email address"
            images="/images/login.png"
        >
            <form data-aos="flip-left" data-aos-once="true" onSubmit={onSubmit}>
                <div className={style['form-input']}>
                    <InputAuth
                        label="Email"
                        name="email"
                        placeholder="Email"
                        required
                    />
                    <InputAuth
                        label="Password"
                        name="password"
                        placeholder="Password"
                        type="Password"
                        required
                    />
                    <CheckBox />
                    <AuthButton text="Login" type="submit" />
                    <Additions
                        directMessage="Register"
                        message="Don't have an account?"
                        direct="/Auth/register"
                    />
                </div>
            </form>
        </AuthComponents>
    );
}
