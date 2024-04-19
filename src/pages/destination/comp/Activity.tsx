import { useEffect } from 'react';
import ButtonSectionContainer from 'src/components/elements/Button/ButtonSectionContainer';
import useGet from 'src/hooks/useGet';
import style from '@/styles/activity.module.css';
import { div } from 'react-bootstrap';

export default function Activity() {
    const { getData, data } = useGet();

    useEffect(() => {
        getData('activities');
    }, []);

    console.log(data);

    return (
        <div className={style['activity']}>
            <h1>TOP BOOK NOW</h1>
            <div className={style.card}>
                {data?.map((item: any) => (
                    <div key={item.id} className={style['fill-card']}>
                        <div className={style['card-headers']}>
                            <span className={style.badge}>
                                ⭐ {item.rating}
                            </span>
                            <img src={item.imageUrls[1]} alt="maldives" />
                        </div>
                        <div className={style['card-content']}>
                            <h6>
                                {item.title} <span>📍 {item.province}</span>
                            </h6>
                            <p>
                                {item.price.toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                })}
                                {/* <span>{item.discount}</span> */}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={style['button']}>
                <ButtonSectionContainer className={style.button}>
                    See All
                </ButtonSectionContainer>
            </div>
        </div>
    );
}
