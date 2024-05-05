import { useEffect, useState } from 'react';
import useGet from 'src/hooks/useGet';
import style from '@/styles/destinationStyles/activity.module.css';
import Link from 'next/link';
import FilterByCategoriesId from 'src/components/elements/Filter';

export default function Activity({ button, onClick }: any) {
    const { getData } = useGet();
    const [data, setData] = useState<any>([]);
    const [categories, setCategories] = useState<any>([]);

    useEffect(() => {
        getData('activities').then((res: any) => {
            setData(res?.data?.data);
        });
    }, []);

    useEffect(() => {
        getData('categories').then((res: any) => {
            setCategories(res?.data?.data);
        });
    }, []);

    const handleFilter = () => {
        const category = document.getElementById(
            'categories'
        ) as HTMLInputElement;
        const categoryValue = category.value;

        getData(`activities-by-category/${categoryValue}`).then((res: any) => {
            setData(res?.data?.data);
        });
    };

    return (
        <div className={style['activity']}>
            <div className={style['head']}>
                <h1>POPULAR DESTINATION</h1>
                <FilterByCategoriesId
                    select={categories}
                    onClick={handleFilter}
                    id="categories"
                />
            </div>

            <div className={style['image-container']}>
                {data.length === 0 ? (
                    <p>Data Not Found</p>
                ) : (
                    data?.slice(0, 6).map((item: any, index: number) => (
                        <Link
                            key={index}
                            href={`/destination/Activity/${item.id}`}
                        >
                            <img
                                src={
                                    item.imageUrls[0] ||
                                    item.imageUrls[1] ||
                                    item.imageUrls[2] ||
                                    item.imageUrls[3]
                                }
                                alt={`activity ${index}`}
                            />
                        </Link>
                    ))
                )}
            </div>
            <div className={style['view-more']}>
                <button onClick={onClick}>{button}</button>
            </div>
        </div>
    );
}
