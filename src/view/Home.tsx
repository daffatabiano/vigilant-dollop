import { useSelector } from 'react-redux';
import HomeLayout from 'src/Layout/HomeLayout';
import ModalNotif from 'src/components/Modals/ModalNotif';
import DiscoverFull from 'src/fragments/sections/DiscoverFull';
import Explore from 'src/fragments/sections/Explore';
import FAQ from 'src/fragments/sections/FAQ ';
import Packages from 'src/fragments/sections/Packages';
import PartnerSections from 'src/fragments/sections/PartnerSections';
import Rating from 'src/fragments/sections/Rating';
import style from 'src/styles/home.module.css';

export default function HomeView() {
    const isShowLogout = useSelector((store: any) => store.logout.logout);

    return (
        <div className={style.container}>
            {isShowLogout && (
                <ModalNotif
                    modal={{
                        head: 'Logout Success',
                        text: 'You have been logged out, thank you for goodbye! 😊',
                    }}
                />
            )}
            <HomeLayout />
            <PartnerSections />
            <DiscoverFull />
            <Explore />
            <Rating />
            <Packages />
            <FAQ />
        </div>
    );
}
