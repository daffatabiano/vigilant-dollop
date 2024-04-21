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
                    <Link href={'/'}>Promo</Link>
                </li>
                <li className={'nav-item'}>
                    <Link href={'/'}>Blog</Link>
                </li>
                <li className={'nav-item'}>
                    <Link href={'/'}>Contact</Link>
                </li>
            </ul>
        </div>
    );
}