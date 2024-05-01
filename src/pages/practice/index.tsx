import { useEffect, useState } from 'react';
import Pagination from 'src/components/Pagination';
import useAuth from 'src/hooks/useAuth';
import useGet from 'src/hooks/useGet';

export default function Practice() {
    const [data, setData] = useState<any>([]);
    const { onLogout } = useAuth();
    const [page, setPage] = useState(1);
    const startIndex = (page - 1) * 10;
    const endIndex = startIndex + 10;
    const totalPage = Math.ceil(data?.length / 10);
    useEffect(() => {
        onLogout('all-user', (res: any) => {
            setData(res);
        });
    }, []);

    return (
        <>
            {data
                ?.slice(startIndex, endIndex)
                .map((item: any, index: number) => (
                    <div key={index}>
                        <img src={item?.image} alt={item?.name} />
                        <Pagination
                            arr={data?.length / 10}
                            currentPage={setPage}
                            onPageChange={() => setPage(totalPage)}
                        />
                    </div>
                ))}
        </>
    );
}
