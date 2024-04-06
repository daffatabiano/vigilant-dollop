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
    const handleLogin: any = async (e: any) => {
        e.preventDefault();
    };
    return (
        <>
            <Navbar />
            <main
                className={`flex bg-[#141414] min-h-screen flex-col items-center justify-between p-24`}
            >
                <form onSubmit={handleLogin} className="w-1/2 text-black">
                    <label htmlFor="" className="text-white">
                        email
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="sHt5u@example.com"
                    />
                    <label htmlFor="" className="text-white">
                        password{' '}
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="*******"
                    />
                    <div className="w-1/2 text-white">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </main>
        </>
    );
}
