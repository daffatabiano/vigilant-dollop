import useAuth from '@/hooks/useAuth';
import navbar from '@/styles/navbar.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function ProfileIcon({
    picture = 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745',
    out,
}: any) {
    const { onLogout, isLoading } = useAuth();
    const [profile, setProfile] = useState({});
    const route = useRouter();
    const handleLogout = () => {
        onLogout('logout', () => {
            route.push('/auth/login');
            localStorage.clear();
            setProfile({});
            route.reload();
        });
    };
    return (
        <div className={`dropdown ${out}`}>
            <button
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                className={'dropdown-toggle'}
            >
                <img src={picture} className={navbar.profile} />
            </button>
            <ul className="dropdown-menu">
                <li>
                    <a className="dropdown-item" href="#">
                        Profile
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="#">
                        List Users
                    </a>
                </li>
                <li>
                    <a onClick={handleLogout} className="dropdown-item">
                        logout
                    </a>
                </li>
            </ul>
        </div>
    );
}
