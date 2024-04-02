import navbar from '@/styles/navbar.module.css';
import Link from 'next/link';

export default function NavList() {
    return (
        <div className={` ${navbar.list} `}>
           <ul>
            <li>
                <Link href={''}></Link>
            </li>
           </ul>
        </div>
    );
}
