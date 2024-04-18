import style from '@/styles/destination.module.css';
import { useEffect, useState } from 'react';
import useGet from 'src/hooks/useGet';

export default function CardDiscount({ props }: any) {
    const { getData } = useGet();
    const [promo, setPromo] = useState<any>({});
    useEffect(() => {
        setPromo(props);
        getData(`promo/${props.id}`);
    }, []);

    return (
        <div className={style['card-discount']}>
            <h1>{promo.title}</h1>
        </div>
    );
}
