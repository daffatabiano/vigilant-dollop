import Image from 'next/image';
import Link from 'next/link';
import NavList from '../NavList';

export default function LogoNavbar({ styles }: any) {
    return (
        <>
            <div className={styles}>
                <Link href="">
                    <img
                        src="/images/logo-travel.png"
                        alt="To-Ravel-Find-Freedom Logo"
                    />
                </Link>
                <NavList />
            </div>
        </>
    );
}
