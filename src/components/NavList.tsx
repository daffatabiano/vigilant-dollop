import navbar from '@/styles/navbar.module.css';
import Link from 'next/link';
import List from './elements/List';

export default function NavList() {
    return (
        <>
            <ul className={`${navbar.list} `}>
                <List text="Destination" />
                <List text="Package" />
                <List text="Promo" />
                <List text="Blog" />
                <List text="Contact" />
            </ul>
        </>
    );
}
