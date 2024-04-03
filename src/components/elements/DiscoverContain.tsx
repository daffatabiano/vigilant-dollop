import Header from './Header';
import home from '@/styles/home.module.css';

export default function DiscoverContain({ children, text }: any) {
    return (
        <>
            <Header style={`${home['section-header-discover']} `} text={text} />
            <p className={home['discover-text']}>{children}</p>
        </>
    );
}
