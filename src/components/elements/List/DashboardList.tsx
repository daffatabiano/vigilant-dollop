import Link from 'next/link';
import style from '@/styles/dashboard.module.css';

export default function DashboardList({ children, text, href }: any) {
    return (
        <li>
            <span>{children}</span>
            <Link href={href} className={style['link']}>
                {text}
            </Link>
        </li>
    );
}
