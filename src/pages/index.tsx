// import usePost from '@/hooks/usePost';
import AuthLayout from '@/Layout/AuthLayout';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <AuthLayout className={` ${inter.className}`}>
            <h1>ini home page </h1>
        </AuthLayout>
    );
}
