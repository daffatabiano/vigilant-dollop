import { useEffect } from 'react';
import useGet from 'src/hooks/useGet';

export default function Activity() {
    const { getData, data } = useGet();

    useEffect(() => {
        getData('activities');
    }, []);
    console.log(data.data);
    return <></>;
}
