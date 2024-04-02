import Navbar from '@/fragments/Navbar';

export default function AuthLayout({ children }: any) {
    return (
        <>
            <Navbar />
            <div>{children}</div>
        </>
    );
}
