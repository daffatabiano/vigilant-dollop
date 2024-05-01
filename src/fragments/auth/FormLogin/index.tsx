import style from 'src/styles/auth.module.css';
import InputAuth from '../InputAuth';
import AuthComponents from '..';
import CheckBox from './CheckBox';
import Additions from '../Additions';
import AuthButton from '../AuthButton';
import useAuth from 'src/hooks/useAuth';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setShow } from 'src/redux/slice/cardShow';
type Props = {
    onSubmit: any;
};

export default function FormLogin(props: Props) {
    const { onSubmit } = props;

    return (
        <AuthComponents
            title="Login"
            titleSpan="Sign in with your email address"
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
                        directMessage="Don't have an account?"
                        message="Don't have an account?"
                        direct="/auth/register"
                    />
                    {/* <p className={style.addition}>
                        Don&apos;t have an account?
                        <Link href="/auth/register"> Sign up</Link>
                    </p> */}
                </div>
            </form>
        </AuthComponents>
    );
}
