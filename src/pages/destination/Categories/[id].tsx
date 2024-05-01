import Link from 'next/link';
import { useRouter } from 'next/router';
import { split } from 'postcss/lib/list';
import { useEffect, useState } from 'react';
import useGet from 'src/hooks/useGet';
import style from 'src/styles/destinationStyles/categories.module.css';

export default function DetailCategoriesPage() {
    const { getData } = useGet();
    const router = useRouter();
    const [data, setData] = useState<any>([]);
    const [activity, setActivity] = useState<any>([]);

    useEffect(() => {
        getData('activities').then((res) => {
            setActivity(res?.data?.data);
        });
    }, []);

    useEffect(() => {
        if (router?.query?.id) {
            getData(`category/${router?.query?.id}`).then((res) => {
                setData(res?.data?.data);
                console.log(res);
            });
        }
    }, [router?.query?.id]);

    return (
        <div className={style['detail-categories']}>
            <div className={style['detail-categories-image']}>
                <h1>{data?.name}</h1>
                <img src={data?.imageUrl} alt={data?.title} />
            </div>
            <p className='relative z-10 fs-4 fw-bold'>Popular Destination</p>
            <div className={style['activity']}>
                {activity.slice(0, 6).map((item: any) => {
                    return (
                        <Link
                            href={`/destination/Activity/${item?.id}`}
                            key={item?.id}
                        >
                            <img src={item?.imageUrls} alt={item?.title} />
                        </Link>
                    );
                })}
            </div>

            <div className={style['button']}>
                <button onClick={() => router.back()}>Turn Back</button>
                <button onClick={() => router.push('/destination/Activity')}>
                    Book Now
                </button>
            </div>
        </div>
    );
}
