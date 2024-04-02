// import usePost from '@/hooks/usePost';
import AuthLayout from '@/Layout/AuthLayout';
import home from '@/styles/home.module.css';

export default function Home() {
    return (
        <AuthLayout>
            <header className={home.header}>
                <img src="/images/to-ravel-header.jpg" alt="logo" />
                <div className={home['header-content']}>
                    <h1>FINDING YOUR FREEDOM HERE !</h1>
                    <p>Expolore The World with your Vehicle&apos;s dream</p>
                </div>
            </header>
        </AuthLayout>
    )
}
