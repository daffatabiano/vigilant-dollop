import Footer from "src/fragments/Footer";
import Navbar from "src/fragments/Navbar";

export default function AuthLayout({ children }: any) {
    return (
        <div>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </div>
    );
}
