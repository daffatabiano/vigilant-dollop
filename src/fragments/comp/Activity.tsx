import { useEffect, useState } from 'react';
import useGet from 'src/hooks/useGet';

export default function Activity() {
    const { getData } = useGet();
    const [data, setData] = useState<any>([]);
    useEffect(() => {
        getData('activities').then((res: any) => {
            setData(res?.data?.data);
        });
    });

    return <></>;
}
