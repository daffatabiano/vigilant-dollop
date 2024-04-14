import HambMenu from '@/components/elements/HambMenu';
import LogoNavbar from '@/components/elements/LogoNav';
import ProfileIcon from '@/components/ProfilIcon';
import useAuth from '@/hooks/useAuth';
import navbar from '@/styles/navbar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [scroll, setScroll] = useState(0);
    const [profile, setProfile] = useState({} as any);
    const { onLogout, isLoading } = useAuth();
    const route = useRouter();

    useEffect(() => {
        handleProfile();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    const handleProfile = () => {
        if (localStorage.getItem('token')) {
            onLogout('user', (res: any) => {
                setProfile(res);
            });
        }
    };

    const handleLogout = () => {
        onLogout('logout', () => {
            setProfile({});
            route.push('/login');
        });
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
            {profile.name ? (
                <ProfileIcon out={`pt-3`} picture={profile.profilePictureUrl} />
            ) : (
                <Link href={'/auth/login'} className={`btn btn-primary `}>
                    login
                </Link>
            )}
        </nav>
    );
}
