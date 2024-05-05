import style from '@/styles/destination.module.css';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Animation from 'src/utils/aos';

export default function CardDiscount({ data }: any) {
    useEffect(() => {
        Animation();
    });
    return (
        <div data-aos="fade-right" data-aos-once="true" className={style.card}>
            <img src={data.imageUrl} alt="" />
            <div className={style['promo-cb']}>
                <h1>{data.title.split(' ').slice(0, 2).join(' ')}</h1>
                <p>
                    {data.description.split(' ').length > 10
                        ? data.description.split(' ').slice(0, 10).join(' ') +
                          '. . .'
                        : data.description}
                </p>
                <Button
                    onClick={() =>
                        (window.location.href = `/destination/DiscountPage/${data.id}`)
                    }
                    variant="primary"
                >
                    Detail
                </Button>
            </div>
        </div>
    );
}
