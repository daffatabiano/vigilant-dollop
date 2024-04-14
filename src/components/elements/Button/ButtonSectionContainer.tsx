import home from '@/styles/home.module.css';

export default function ButtonSectionContainer({ children }:any) {
    return (
        <>
            <div className={home['section-button-container']}>{children}</div>
        </>
    );
}
