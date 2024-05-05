import home from '@/styles/home.module.css';

export default function Card({ children, ...rest }: any) {
    return (
        <section {...rest} className={`${home['section-card']}`}>
            {children}
        </section>
    );
}
