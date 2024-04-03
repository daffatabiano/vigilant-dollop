import home from '@/styles/home.module.css';

export default function Header({ text }: any) {
    return (
        <>
            <h1 className={home['section-header']}>{text}</h1>
        </>
    );
}
