import HomeLayout from 'src/Layout/HomeLayout';
import DiscoverFull from 'src/fragments/sections/DiscoverFull';
import Explore from 'src/fragments/sections/Explore';
import FAQ from 'src/fragments/sections/FAQ ';
import Packages from 'src/fragments/sections/Packages';
import PartnerSections from 'src/fragments/sections/PartnerSections';
import Rating from 'src/fragments/sections/Rating';
import style from 'src/styles/home.module.css';

export default function HomeView() {
    return (
        <div className={style.container}>
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
