import style from '@/styles/destination.module.css';

export default function DiscountBody({ children }: any) {
    return <div className={style['discount-body']}>{children}</div>;
}
