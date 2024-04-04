// import usePost from '@/hooks/usePost';
import AuthLayout from '@/Layout/AuthLayout';
import HomeLayout from '@/Layout/HomeLayout';
import PartnerSections from '@/fragments/sections/PartnerSections';
import Explore from '@/fragments/sections/Explore';
import DiscoverFull from '@/fragments/sections/DiscoverFull';
import Rating from '@/fragments/sections/Rating';
import Packages from '@/fragments/sections/Packages';
import CardHome from '@/fragments/sections/CardHome';

export default function Home() {
    return (
        <AuthLayout>
            <HomeLayout />
            <PartnerSections />
            <DiscoverFull />
            <Explore />
            <Rating />
            <Packages />
            <CardHome />
        </AuthLayout>
    );
}
