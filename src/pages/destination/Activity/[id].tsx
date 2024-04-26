import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import LoadingPage from 'src/fragments/loading';
import useGet from 'src/hooks/useGet';

export default function DetailActivityPage() {
    const { getData } = useGet();
    const route = useRouter();
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState<any>(false);

    useEffect(() => {
        if (route?.query?.id) {
            setLoading(true);
            getData(`activity/${route?.query?.id}`).then((res: any) => {
                setData(res?.data.data);
                setLoading(false);
            });
        }
    }, [route?.query?.id]);
    console.log(data, 'data');

    if (loading) {
        return (
            <>
                <LoadingPage />
            </>
        );
    }

    return (
        <>
            <h1 className="text-black">{data?.title}</h1>
            <p className="text-black">{data?.categoryId}</p>
            <div
                dangerouslySetInnerHTML={{ __html: data?.location_maps }}
            ></div>
        </>
    );
}
