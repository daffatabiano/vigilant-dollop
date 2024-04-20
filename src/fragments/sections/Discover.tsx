import home from '@/styles/home.module.css';
import AvatarsComment from '../../components/elements/Discover/AvatarsComment';
import ButtonSectionContainer from '../../components/elements/Button/ButtonSectionContainer';
import DiscoverContain from '../../components/elements/Discover/DiscoverContain';
import DiscoverAside from '../../components/elements/Discover/DiscoverAside';
import Button from 'src/components/elements/Button/Button';

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

const Container = ({ children, textB, title, message }: any) => {
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
                    <p className="text-red-500 text-lg fs-6">{message}</p>
                </AvatarsComment>
            </section>
        </>
    );
};

Discover.Container = Container;
Discover.Aside = Aside;
