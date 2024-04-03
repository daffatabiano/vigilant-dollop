// import usePost from '@/hooks/usePost';
import AuthLayout from '@/Layout/AuthLayout';
import HomeLayout from '@/Layout/HomeLayout';
import Discover from '@/components/elements/sections/Discover';

import PartnerSections from '@/components/elements/sections/PartnerSections';

export default function Home() {
    return (
        <AuthLayout>
            <HomeLayout />
            <PartnerSections />
            <Discover />
        </AuthLayout>
    );
}
