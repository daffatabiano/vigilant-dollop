import navbar from '@/styles/navbar.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ProfileIcon from 'src/components/ProfilIcon';
import HambMenu from 'src/components/elements/HambMenu';
import LogoNavbar from 'src/components/elements/LogoNav';
import useAuth from 'src/hooks/useAuth';

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [scroll, setScroll] = useState(0);
    const [profile, setProfile] = useState({} as any);
    const { onLogout } = useAuth();

    useEffect(() => {
        handleProfile();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleProfile = () => {
        if (localStorage.getItem('token')) {
            onLogout('user', (res: any) => {
                setProfile(res);
            });
        }
    };

    const handleScroll = () => {
        const position = window.scrollY;
        setScroll(position);
        if (scroll > 50) {
            setShowMenu(true);
        } else {
            setShowMenu(false);
        }
    };
    return (
        <nav className={scroll > 50 ? navbar.navActive : navbar.nav}>
            <HambMenu />
            <LogoNavbar styles={` ${navbar.logo} `} />
            <div className={navbar.profile}>
                {profile.name ? (
                    <ProfileIcon
                        href="/Dashboard"
                        picture={profile.profilePictureUrl}
                        text="Dashboard"
                    />
                ) : (
                    <Link href={'/auth/login'} className={`btn btn-primary `}>
                        login
                    </Link>
                )}
            </div>
        </nav>
    );
}
