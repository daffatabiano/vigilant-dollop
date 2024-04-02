import useGet from '@/hooks/useGet';
import usePost from '@/hooks/usePost';
import { useState } from 'react';

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const { post } = usePost();
    const { get } = useGet();
    const handleLogin: any = (e: any) => {
        e.preventDefault();
        console.log(e.target?.email as any, 'target');
        const email = e?.email?.target?.value;
        const password = e?.target?.password?.value;
        setIsLogin(true);
        post('login', {
            email,
            password,
        });
    };
    const handleLogout: any = (e: any) => {
        e.preventDefault();
        setIsLogin(false);
        get('logout');
    };

    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24`}
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
                <input type="password" name="password" placeholder="*******" />
                <div>
                    {isLogin ? (
                        <button
                            type="submit"
                            className="text-white"
                            autoFocus
                            onClick={(e) => handleLogin(e)}
                        >
                            Login
                        </button>
                    ) : (
                        <button
                            onClick={handleLogout}
                            type="submit"
                            className="text-white"
                        >
                            Logout
                        </button>
                    )}{' '}
                </div>
            </form>
        </main>
    );
}
