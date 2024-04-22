import Link from 'next/link';
import { useEffect, useState } from 'react';
import DashboardList from 'src/components/elements/List/DashboardList';
import Icons from 'src/components/elements/SvgIcons';
import ProfileIcon from 'src/components/ProfilIcon';
import useAuth from 'src/hooks/useAuth';
import style from 'src/styles/dashboard.module.css';

export default function DashLayout({ children }: any) {
    const { onLogout } = useAuth();
    const [profil, setProfil] = useState<any>({});
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
                            <Link href="/Dashboard">
                                <Icons.Home
                                    classname={`bi bi-house ${style['icons']}`}
                                />
                            </Link>
                        </DashboardList>
                        <DashboardList
                            href="/Dashboard/pages/Activity"
                            text="Activity"
                        >
                            <Link href="/Dashboard/pages/Activity">
                                <Icons.Suitcase
                                    classname={`bi bi-suitcase-lg ${style['icons']}`}
                                />
                            </Link>
                        </DashboardList>
                        <DashboardList
                            text="Banner"
                            href="/Dashboard/pages/Banner"
                        >
                            <Link href="/Dashboard/pages/Banner">
                                <Icons.Collection
                                    classname={`bi bi-collection-fill ${style['icons']}`}
                                />
                            </Link>
                        </DashboardList>
                        <DashboardList
                            href="/Dashboard/pages/Promo"
                            text="Promo"
                        >
                            <Link href="/Dashboard/pages/Promo">
                                <Icons.Ticket
                                    classname={`bi bi-ticket-perforated ${style['icons']}`}
                                />
                            </Link>
                        </DashboardList>
                        <DashboardList
                            href="/Dashboard/pages/Category"
                            text="Category"
                        >
                            <Link href="/Dashboard/pages/Category">
                                <Icons.Bag
                                    classname={`bi bi-backpack4 ${style['icons']}`}
                                />
                            </Link>
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
