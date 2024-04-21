import Discount from 'src/fragments/comp/Discount';
import Navbar from 'src/fragments/Navbar';
import style from 'src/styles/destination.module.css';

export default function DiscountPage() {
    return (
        <div className={style['background']}>
            <Navbar />
            <Discount />
        </div>
    );
}
