import Footer from 'src/fragments/Footer';
import Navbar from 'src/fragments/Navbar';
import Activity from 'src/fragments/comp/Activity';
import style from 'src/styles/destination.module.css';

export default function ActivityPage() {
    return (
        <div className={style.background}>
            <Navbar />
            <div className="pt-5">
                <Activity onClick={() => (window.location.href = '/destination')} button='Back' />
            </div>
            <Footer />
        </div>
    );
}
