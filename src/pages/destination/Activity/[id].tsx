import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useGet from 'src/hooks/useGet';
import style from 'src/styles/destinationStyles/activity.module.css';

export default function DetailActivityPage() {
    const { getData } = useGet();
    const router = useRouter();
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        if (router?.query?.id) {
            getData(`activity/${router?.query?.id}`).then((res) => {
                setData(res?.data?.data);
                console.log(res?.data, 'data');
            });
        }
    }, [router?.query?.id]);

    return (
        <div className={style['detail-activity']}>
            <img src={data?.imageUrls} alt={data?.title} />
            <p>{data?.title}</p>
            <p>{data?.description}</p>
            <p>price :{data?.price}</p>
            <p>discount: {data?.price_discount}</p>
            <p>rating: {data?.rating}</p>
            <p>totak: total_reviews{data?.total_reviews}</p>
            <p>fasilitas{data?.facilities}</p>
            <p> address{data?.address}</p>
            <p>province{data?.province}</p>
            <p>coity{data?.city}</p>
            <div
                dangerouslySetInnerHTML={{ __html: data?.location_maps }}
            ></div>
        </div>
    );
}
