import { useEffect, useState } from 'react';
import DashboardList from 'src/components/elements/List/DashboardList';
import Icons from 'src/components/elements/SvgIcons';
import ProfileIcon from 'src/components/ProfilIcon';
import useAuth from 'src/hooks/useAuth';
import style from 'src/styles/dashboard.module.css';

export default function DashLayout({ children }: any) {
    const { onLogout } = useAuth();
    const [profil, setProfil] = useState({});
    useEffect(() => {
        onLogout('user', (res: any) => {
            setProfil(res);
        });
    }, []);

    return (
        <div className={style['background']}>
            <div>
                <div className={style['sidebar']}>
                    <div className={style['logo']}>
                        <img
                            src="/images/logo-tulisan-travel.png"
                            alt="logo-travel"
                        />
                        {/* <h1>toravelfindfreedom</h1> */}
                        <hr />
                    </div>

                    <ul className={style['list']}>
                        <DashboardList href="/Dashboard" text="Dashboard">
                            <Icons.Home
                                classname={`bi bi-house ${style['icons']}`}
                            />
                        </DashboardList>
                        <DashboardList
                            href="/Dashboard/pages/Activity"
                            text="Activity"
                        >
                            <Icons.Suitcase
                                classname={`bi bi-suitcase-lg ${style['icons']}`}
                            />
                        </DashboardList>
                        <DashboardList
                            text="Banner"
                            href="/Dashboard/pages/Banner"
                        >
                            <Icons.Collection
                                classname={`bi bi-collection-fill ${style['icons']}`}
                            />
                        </DashboardList>
                        <DashboardList
                            href="/Dashboard/pages/Promo"
                            text="Promo"
                        >
                            <Icons.Ticket
                                classname={`bi bi-ticket-perforated ${style['icons']}`}
                            />
                        </DashboardList>
                        <DashboardList
                            href="/Dashboard/pages/Category"
                            text="Category"
                        >
                            <Icons.Bag
                                classname={`bi bi-backpack4 ${style['icons']}`}
                            />
                        </DashboardList>
                    </ul>
                    <ProfileIcon
                        picture={profil?.profilePictureUrl}
                        href="/destination"
                        text="Home"
                    />
                </div>
                {children}
            </div>
        </div>
    );
}
