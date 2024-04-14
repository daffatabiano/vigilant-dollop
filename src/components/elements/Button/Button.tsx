import home from '@/styles/home.module.css';

export default function Button({ children, color, onClick }: any) {
    return (
        <>
            <button onClick={onClick} className={`${color} ${home.button}`}>{children}</button>
        </>
    );
}
