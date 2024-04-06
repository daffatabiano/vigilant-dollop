import navbar from '@/styles/navbar.module.css';
import Link from 'next/link';
import List from './elements/List';

export default function NavList() {
    return (
        <>
            <ul className={`${navbar.list} `}>
                <List text="Destination" style />
                <List text="Package" style />
                <List text="Promo" style />
                <List text="Blog" style />
                <List text="Contact" style />
            </ul>
        </>
    );
}
