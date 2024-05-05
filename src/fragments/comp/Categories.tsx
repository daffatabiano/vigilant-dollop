import { useEffect, useState } from 'react';
import ButtonSectionContainer from 'src/components/elements/Button/ButtonSectionContainer';
import useGet from 'src/hooks/useGet';
import style from '@/styles/categories.module.css';
import Link from 'next/link';
import Animation from 'src/utils/aos';

export default function Categories({ onClick, button }: any) {
    const { getData } = useGet();
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        getData('categories').then((res: any) => {
            setData(res?.data?.data);
        });
        Animation();
    }, []);

    return (
        <div className={style['categories']}>
            <h1>TOP BOOK NOW</h1>
            <div className={style.card}>
                {data.map((item: any) => (
                    <div
                        data-aos="flip-up"
                        data-aos-once="true"
                        key={item.id}
                        className={style['fill-card']}
                    >
                        <Link
                            href={`/destination/Categories/${item.id}`}
                            className={style['card-headers']}
                        >
                            <img src={item.imageUrl} alt="maldives" />
                            <h6>
                                {item.name
                                    .split(' ')
                                    .slice(0, 1)
                                    .join(' ')
                                    .toUpperCase()}{' '}
                            </h6>
                        </Link>
                    </div>
                ))}
            </div>
            <div className={style['button']}>
                <ButtonSectionContainer
                    className={`${style.button}`}
                    onClick={onClick}
                >
                    {button}
                </ButtonSectionContainer>
            </div>
        </div>
    );
}
