import { useEffect, useState } from 'react';
import ButtonSectionContainer from 'src/components/elements/Button/ButtonSectionContainer';
import useGet from 'src/hooks/useGet';
import style from '@/styles/activity.module.css';

export default function Activity() {
    const { getData } = useGet();
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        getData('activities').then((res) => {
            setData(res?.data?.data);
        });
    }, []);


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
                                {item.title}{' '}
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className={`bi bi-geo-alt ${style['icons']}`}
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                    </svg>
                                    {item.province}
                                </span>
                            </h6>
                            <p>
                                {item.price.toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                })}
                                <span>
                                    {item.price_discount.toLocaleString(
                                        'en-US',
                                        {
                                            style: 'currency',
                                            currency: 'USD',
                                        }
                                    )}
                                </span>
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
