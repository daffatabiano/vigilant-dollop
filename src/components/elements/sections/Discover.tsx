import Button from '@/components/elements/Button';
import Header from '@/components/elements/Header';
import home from '@/styles/home.module.css';
import AvatarsComment from '../AvatarsComment';
import ButtonSectionContainer from '../ButtonSectionContainer';
import DiscoverContain from '../DiscoverContain';
import DiscoverAside from '../DiscoverAside';

export default function Discover({ children, style }: any) {
    return (
        <>
            <main className={`${home['main-container']} ${style}`}>
                {children}
            </main>
        </>
    );
}

const Aside = ({ pict }: any) => {
    return (
        <>
            <DiscoverAside pict={pict} />
        </>
    );
};

const Container = ({ children, textB, title,message }: any) => {
    return (
        <>
            <section className={home['discover-container']}>
                <DiscoverContain text={title}>{children}</DiscoverContain>
                <ButtonSectionContainer>
                    <Button
                        color={`${home['section-button']} ${home['button-color']}`}
                    >
                        {textB}
                    </Button>
                    <Button color={home['section-button']}>Start Now</Button>
                </ButtonSectionContainer>
                <AvatarsComment picture="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745">
                    <p className="text-red-500 ">
                        {message}
                    </p>
                </AvatarsComment>
            </section>
        </>
    );
};

Discover.Container = Container;
Discover.Aside = Aside;
