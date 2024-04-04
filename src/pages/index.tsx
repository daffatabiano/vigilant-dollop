// import usePost from '@/hooks/usePost';
import AuthLayout from '@/Layout/AuthLayout';
import HomeLayout from '@/Layout/HomeLayout';
import Header from '@/components/elements/Header';
import Discover from '@/fragments/sections/Discover';
import home from '@/styles/home.module.css';

import PartnerSections from '@/fragments/sections/PartnerSections';
import ButtonSectionContainer from '@/components/elements/Button/ButtonSectionContainer';
import Button from '@/components/elements/Button/Button';
import Icons from '@/components/elements/SvgIcons';
import SupportingFacilites from '@/components/SupportingFacilities';
import Explore from '@/fragments/sections/Explore';

export default function Home() {
    return (
        <AuthLayout>
            <HomeLayout />
            <PartnerSections />
            <Discover>
                <Discover.Aside pict="/images/to-ravel.jpg" />
                <Discover.Container
                    title="Discover Your Journey"
                    textB="Learn More"
                    message="Join now and find freedom in everything journey!"
                >
                    Join Us !<span> To Ravel Find Freedom</span> And Explore the
                    World with Your Vehicle&apos;s Dream !
                </Discover.Container>
            </Discover>
            <Discover style="sm:flex sm:flex-row-reverse">
                <div>
                    <Discover.Container
                        title="Embark on an Adventure!"
                        textB="Discover More"
                        message="Join us and embrace the spirit of exploration."
                    >
                        <span>To Ravel Find Freedom</span> invites you to
                        explore the world with the freedom of all modern
                        conveyances at your fingertips.
                    </Discover.Container>
                </div>
                <div>
                    <Discover.Aside pict="/images/discover2.jpg" />
                </div>
            </Discover>
            <Discover>
                <Discover.Aside pict="/images/discover3.jpg" />
                <Discover.Container
                    title="Uncover the World with To Ravel Find Freedom"
                    textB="Explore More"
                    message="Join us and let the spirit of freedom take you to new horizons."
                >
                    Embark on a journey where every mode of transport leads to
                    adventure. Experience the thrill of travel animated in every
                    detail.
                </Discover.Container>
            </Discover>
            <Explore />
        </AuthLayout>
    );
}
