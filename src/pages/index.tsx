// import usePost from '@/hooks/usePost';
import AuthLayout from '@/Layout/AuthLayout';
import HomeLayout from '@/Layout/HomeLayout';
import Header from '@/components/elements/Header';
import Discover from '@/fragments/sections/Discover';
import home from '@/styles/home.module.css';

import PartnerSections from '@/fragments/sections/PartnerSections';
import Explore from '@/fragments/sections/Explore';
import DiscoverFull from '@/fragments/sections/DiscoverFull';
import Rating from '@/fragments/sections/Rating';

export default function Home() {
    return (
        <AuthLayout>
            <HomeLayout />
            <PartnerSections />
            <DiscoverFull />
            <Explore />
            <Rating />
        </AuthLayout>
    );
}
