import HambMenu from '@/components/elements/HambMenu';
import LogoNavbar from '@/components/elements/LogoNav';
import NavList from '@/components/NavList';
import ProfileIcon from '@/components/ProfilIcon';
import navbar from '@/styles/navbar.module.css';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [scroll, setScroll] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScroll(position);
        if (scroll > 50) {
            setShowMenu(true);
        } else {
            setShowMenu(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
    return (
        <nav className={scroll > 50 ? navbar.navActive : navbar.nav}>
            <HambMenu />
            <LogoNavbar styles={` ${navbar.logo} `} />
            <ProfileIcon style={navbar.profile} />
        </nav>
    );
}
