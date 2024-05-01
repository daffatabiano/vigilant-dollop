import home from '@/styles/home.module.css';

export default function ButtonSectionContainer({ children, onClick }:any) {
    return (
        <>
            <div onClick={onClick} className={home['section-button-container']}>{children}</div>
        </>
    );
}
