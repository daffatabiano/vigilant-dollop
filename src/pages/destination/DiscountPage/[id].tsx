import style from '@/styles/destination.module.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useGet from 'src/hooks/useGet';

export default function DiscountDetail() {
    const { getData } = useGet();
    const router = useRouter();
    const [promo, setPromo] = useState<any>([]);

    const id = router?.query.id;
    useEffect(() => {
        if (id) {
            getData(`promo/${id}`).then((res: any) => {
                setPromo(res?.data?.data);
            });
        }
    }, [id]);
    console.log(promo);
    return (
        <div className={style['card-discount']}>
            <h1 className="text-black">{promo?.title}</h1>
            <p className="text-black">{promo?.description}</p>
            <img src={promo?.imageUrl} alt={promo?.title}></img>
            <p className="text-black">{promo?.promo_code}</p>
            <p>{promo?.terms_condition}</p>
            <p>{promo?.promo_discount_price}</p>
            <p className='text-black'>{promo?.minimum_claim_price}</p>
        </div>
    );
}
