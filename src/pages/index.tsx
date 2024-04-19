import AuthLayout from 'src/Layout/AuthLayout';
import HomeLayout from 'src/Layout/HomeLayout';
import DiscoverFull from 'src/fragments/sections/DiscoverFull';
import Explore from 'src/fragments/sections/Explore';
import FAQ from 'src/fragments/sections/FAQ ';
import Packages from 'src/fragments/sections/Packages';
import PartnerSections from 'src/fragments/sections/PartnerSections';
import Rating from 'src/fragments/sections/Rating';

export default function Home() {
    return (
        <AuthLayout>
            <HomeLayout />
            <PartnerSections />
            <DiscoverFull />
            <Explore />
            <Rating />
            <Packages />
            <FAQ />
        </AuthLayout>
    );
}
