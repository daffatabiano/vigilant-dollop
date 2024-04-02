import Image from 'next/image';
import Link from 'next/link';

export default function LogoNavbar({ styles }: any) {
    return (
        <div className={styles}>
            <Link href="" className="">
                <img
                    src="/images/logo-travel.png"
                    alt="To-Ravel-Find-Freedom Logo"
                />
            </Link>
        </div>
    );
}
