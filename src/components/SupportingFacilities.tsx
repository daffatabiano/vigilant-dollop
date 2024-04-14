import home from '../styles/home.module.css';
import Header from './elements/Header';

export default function SupportingFacilites({ children, title, desc }: any) {
    return (
        <>
            <div className="flex-col text-center">
                {children}
                <Header style={home['section-header']} text={title} />
                <p className={`${home['discover-text']}`}>{desc}</p>
            </div>
        </>
    );
}
