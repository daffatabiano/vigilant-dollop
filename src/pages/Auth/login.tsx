import Navbar from '@/fragments/Navbar';
import useGet from '@/hooks/useGet';
import usePost from '@/hooks/usePost';
import { setCredential } from '@/redux/slice/authSlice';
import axios from 'axios';
import { useState } from 'react';

import { useDispatch } from 'react-redux';

export default function Login() {
    const dispatch = useDispatch();
    const [logedin, setLogedin] = useState(true);
    const { post } = usePost();
    const { get } = useGet();
    const handleLogin: any = async (e: any) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        localStorage.setItem('email', email);
        // const pict = e.target.pict.value;
        console.log(password, email);

        post(
            'login',
            { email, password },
            {
                headers: {
                    apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
                },
            }
        );
    };
    const GetData = async () => {
        get();
    };
    return (
        <>
            <main>
                <form
                    onSubmit={handleLogin}
                    className="d-flex text-black flex-column w-50 justify-content-center m-auto"
                >
                    <label>Email</label>
                    <input name="email" placeholder="email" type="text" />
                    <label>Password</label>
                    <input name="password" type="Password" />
                    <button type="submit" className="btn btn-primary">
                        submit
                    </button>
                </form>
            </main>
        </>
    );
}
