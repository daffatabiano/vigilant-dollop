import home from '@/styles/home.module.css';

export default function Card({ children }:any) {
    return <section className={`${home['section-card']}`}>{children}</section>;
}
