import HambMenu from '@/components/elements/HambMenu';
import LogoNavbar from '@/components/elements/LogoNav';
import NavList from '@/components/NavList';
import ProfileIcon from '@/components/ProfilIcon';
import navbar from '@/styles/navbar.module.css';
import { useState } from 'react';

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <nav className={navbar.nav}>
            <HambMenu />
            <LogoNavbar styles={` ${navbar.logo}`} />
            <ProfileIcon />
        </nav>
    );
}
