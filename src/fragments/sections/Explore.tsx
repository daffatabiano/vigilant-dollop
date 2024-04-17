import home from '@/styles/home.module.css';
import SupportingFacilites from 'src/components/SupportingFacilities';
import Button from 'src/components/elements/Button/Button';
import Header from 'src/components/elements/Header';
import Icons from 'src/components/elements/SvgIcons';

export default function Explore() {
    return (
        <>
            <section>
                <Header style={home['section-header']} text="Explore Freedom" />
                <header
                    className={`flex justify-center ${home['section-button-responsive']}`}
                >
                    <Button color={home['section-button']}>Start Now</Button>
                    <Button
                        color={`${home['section-button']} ${home['button-color']}`}
                    >
                        Learn More
                    </Button>
                </header>
                <article className={home['section-icons-f']}>
                    <SupportingFacilites
                        title="Dream Destinations"
                        desc="Discover amazing destinations and start your adventure with
                    To Ravel Find Freedom."
                    >
                        <Icons.Light style={` ${home.responsive}`} />
                    </SupportingFacilites>
                    <SupportingFacilites
                        title="Dream Destinations"
                        desc="Discover amazing destinations and start your adventure with
                    To Ravel Find Freedom."
                    >
                        <Icons.Sparkle style={`${home.responsive}`} />
                    </SupportingFacilites>
                    <SupportingFacilites
                        title="Dream Destinations"
                        desc="Discover amazing destinations and start your adventure with
                    To Ravel Find Freedom."
                    >
                        <Icons.Padlock style={` ${home.responsive}`} />
                    </SupportingFacilites>
                    <SupportingFacilites
                        title="Dream Destinations"
                        desc="Discover amazing destinations and start your adventure with
                    To Ravel Find Freedom."
                    >
                        <Icons.Love style={` ${home.responsive}`} />
                    </SupportingFacilites>
                    <SupportingFacilites
                        title="Dream Destinations"
                        desc="Discover amazing destinations and start your adventure with
                    To Ravel Find Freedom."
                    >
                        <Icons.Moon style={` ${home.responsive}`} />
                    </SupportingFacilites>
                    <SupportingFacilites
                        title="Dream Destinations"
                        desc="Discover amazing destinations and start your adventure with
                    To Ravel Find Freedom."
                    >
                        <Icons.Sun style={` ${home.responsive}`} />
                    </SupportingFacilites>
                </article>
            </section>
        </>
    );
}
