import { useEffect } from 'react';
import useGet from 'src/hooks/useGet';
import DiscountBody from './Body/DiscountBody';
import Aside from './fragm/Aside';
import AliceCarousel from 'react-alice-carousel';
import CardDiscount from './fragm/CardDiscount';
import style from '@/styles/destination.module.css';

export default function Discount() {
    const { getData, data } = useGet();
    const responsive = {
        0: { items: 1, itemsFit: 'contain' },
        568: { items: 2, itemsFit: 'contain' },
        1024: { items: 3, itemsFit: 'contain' },
        1440: { items: 4, itemsFit: 'contain' },
    };

    useEffect(() => {
        getData('promos');
    }, []);
    return (
        <section className={style.discount}>
            <div className={style['promo-tag']}>
                <h1>DISCOUNT UP TO 50%</h1>
                <p>claim quickly!</p>
            </div>
            <DiscountBody>
                <Aside />
                <div className={style['carousel']}>
                    <AliceCarousel
                        disableDotsControls
                        infinite
                        // mouseTracking
                        responsive={responsive}
                        renderNextButton={() => {
                            return <div className={style['arrow']}>{'>'}</div>;
                        }}
                        renderPrevButton={() => {
                            return <div className={style['arrow']}>{'<'}</div>;
                        }}
                    >
                        {data.map((item: any) => (
                            <CardDiscount key={item.id} data={item} />
                        ))}
                    </AliceCarousel>
                </div>
            </DiscountBody>
        </section>
    );
}
