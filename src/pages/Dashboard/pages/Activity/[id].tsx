import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import GoogleMaps from 'src/components/elements/GoogleMaps';
import useGet from 'src/hooks/useGet';

export default function DetailActivity() {
    const [data, setData] = useState<any>([]);
    const [showMap, setShowMap] = useState('');
    const { getData } = useGet();
    const router = useRouter();

    useEffect(() => {
        if (router?.query?.id) {
            getData(`activity/${router?.query?.id}`).then((res) => {
                setData(res?.data.data);
            });
        }
    }, [router?.query?.id]);

    useEffect(() => {
        getData(`activity/${router?.query?.id}`).then((res) => {
            setShowMap(res?.data.data?.location_maps);
        });
    }, [router?.query?.id]);

    return (
        <>
            <h1 className="text-black">{data?.title}</h1>
            <h1 className="text-black">{data?.description}</h1>
            <img src={data?.imageUrls} alt={data?.title} />
            <p className="text-black">{data?.price}</p>
            <p className="text-black">{data?.price_discount}</p>
            <p className="text-black">{data?.rating}</p>
            <p className="text-black">{data?.total_reviews}</p>
            <p className="text-black">{data?.facilities}</p>
            <p className="text-black">{data?.address}</p>
            <p className="text-black">{data?.province}</p>
            <p className="text-black">{data?.city}</p>
            <div dangerouslySetInnerHTML={{ __html: showMap }}></div>
        </>
    );
}
