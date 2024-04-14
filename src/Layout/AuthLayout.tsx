import Footer from '@/fragments/Footer';
import Navbar from '@/fragments/Navbar';

export default function AuthLayout({ children }:any) {
    return (
        <div>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </div>
    );
}
