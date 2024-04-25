import navbar from '@/styles/navbar.module.css';
import Link from 'next/link';

export default function NavList() {
    return (
        <div className={''} id="navbarSupportedContent">
            <ul className={`${navbar.list} `}>
                <li className={'nav-item'}>
                    <Link href={'/destination'}>Destinasi</Link>
                </li>
                <li className={'nav-item'}>
                    <Link href={'/destination/DiscountPage'}>Promo</Link>
                </li>
                <li className={'nav-item'}>
                    <Link href={'/destination/Activity'}>Popular</Link>
                </li>
            </ul>
        </div>
    );
}
