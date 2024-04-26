import { useEffect, useState } from 'react';
import ButtonSectionContainer from 'src/components/elements/Button/ButtonSectionContainer';
import useGet from 'src/hooks/useGet';
import style from '@/styles/activity.module.css';
import Link from 'next/link';

export default function Categories() {
    const { getData } = useGet();
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        getData('categories').then((res: any) => {
            setData(res?.data?.data);
        });
    }, []);

    return (
        <div className={style['categories']}>
            <h1>TOP BOOK NOW</h1>
            <button className={style['filter']}>
                <i className="bi bi-funnel-fill"></i> Filter
            </button>
            <select className={style['select']} name="category" id="category">
                <option value="all" defaultChecked disabled>
                    All
                </option>
                {data.map((item: any) => (
                    <option key={item.id} value={item.id}>
                        {item.name}
                    </option>
                ))}
            </select>
            <div className={style.card}>
                {data.map((item: any) => (
                    <div key={item.id} className={style['fill-card']}>
                        <Link
                            href={`/destination/Activity/${item.id}`}
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
                <ButtonSectionContainer className={style.button}>
                    See All
                </ButtonSectionContainer>
            </div>
        </div>
    );
}
