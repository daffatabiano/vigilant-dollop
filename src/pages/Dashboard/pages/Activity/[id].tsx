import { useEffect, useState } from 'react';
import useGet from 'src/hooks/useGet';

export default function DetailActivity() {
    const [data, setData] = useState<any>([]);
    const { getData } = useGet();

    useEffect(() => {
        getData(`activity/${id}`).then((res: any) => {
            setData(res.data.data);
        });
        
    }, []);

    console.log(data);
    return <></>;
}
