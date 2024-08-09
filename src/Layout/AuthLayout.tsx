import Footer from 'src/fragments/Footer';
import Navbar from 'src/fragments/Navbar';

export default function AuthLayout({ children }: any) {
    return (
        <>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </>
    );
}
