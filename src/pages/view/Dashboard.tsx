import Link from 'next/link';
import { useEffect } from 'react';
import style from 'src/styles/dashboard.module.css';
import useGet from 'src/hooks/useGet';
import DashboardList from 'src/components/elements/List/DashboardList';
import Icons from 'src/components/elements/SvgIcons';
import ProfileIcon from 'src/components/ProfilIcon';

export default function DashboardView() {
    const { data, getDataUser } = useGet();

    useEffect(() => {
        getDataUser();
    }, []);

    console.log(data);
    return (
        <div className={style['background']}>
            <div className={style['sidebar']}>
                <div className={style['logo']}>
                    <img
                        src="images/logo-tulisan-travel.png"
                        alt="logo-travel"
                    />
                    {/* <h1>toravelfindfreedom</h1> */}
                    <hr />
                </div>

                <ul className={style['list']}>
                    <DashboardList href="#" text="Dashboard">
                        <Icons.Home
                            classname={`bi bi-house ${style['icons']}`}
                        />
                    </DashboardList>
                    <DashboardList href="#" text="Activity">
                        <Icons.Suitcase
                            classname={`bi bi-suitcase-lg ${style['icons']}`}
                        />
                    </DashboardList>
                    <DashboardList href="#" text="Banner">
                        <Icons.Collection
                            classname={`bi bi-collection-fill ${style['icons']}`}
                        />
                    </DashboardList>
                    <DashboardList href="#" text="Promo">
                        <Icons.Ticket
                            classname={`bi bi-ticket-perforated ${style['icons']}`}
                        />
                    </DashboardList>
                    <DashboardList href="#" text="Category">
                        <Icons.Bag
                            classname={`bi bi-backpack4 ${style['icons']}`}
                        />
                    </DashboardList>
                </ul>
                <ProfileIcon href="/destination" text="Home" />
            </div>
        </div>
    );
}
