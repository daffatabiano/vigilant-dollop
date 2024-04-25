import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useGet from 'src/hooks/useGet';

export default function DetailActivityPage() {
    const { getData } = useGet();
    const route = useRouter();
    const [data, setData] = useState<any>([]);

    const id = route?.query?.id;
    useEffect(() => {
        if (id) {
            getData(`activity/${id}`).then((res: any) => {
                setData(res?.data.data);
            });
        }
    }, [id]);

    console.log(data);

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
