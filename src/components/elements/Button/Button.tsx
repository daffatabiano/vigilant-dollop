import home from '@/styles/home.module.css';

export default function Button({ children, color }: any) {
    return (
        <>
            <button className={`${color} ${home.button}`}>{children}</button>
        </>
    );
}
