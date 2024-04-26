import Footer from 'src/fragments/Footer';
import Navbar from 'src/fragments/Navbar';
import Activity from 'src/fragments/comp/Categories';
import style from 'src/styles/destination.module.css';

export default function ActivityPage() {
    return (
        <div className={style.background}>
            <Navbar />
            <div className="pt-5">
                <Activity />
            </div>
            <Footer />
        </div>
    );
}
