import { useEffect, useState } from 'react';
import useGet from 'src/hooks/useGet';
import style from '@/styles/destinationStyles/activity.module.css';

export default function Activity() {
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

    console.log(data);

    return (
        <div className={style['activity']}>
            <div className={style['head']}>
                <h1>POPULAR DESTINATION</h1>
                <div className={style['filter']}>
                    <select name="categories" id="categories">
                        <option value="DEFAULT" disabled selected>
                            All Categories
                        </option>
                        {categories.map((item: any) => (
                            <option value={item.id} key={item.id}>
                                {item.name}
                            </option>
                        ))}
                    </select>{' '}
                    <button>
                        <i className="bi bi-funnel-fill"></i> Filter
                    </button>
                </div>
            </div>

            <div className={style['image-container']}>
                {data.slice(0, 10).map((item: any, index: number) => (
                    <>
                        <img
                            src={
                                item.imageUrls[0] ||
                                item.imageUrls[1] ||
                                item.imageUrls[2] ||
                                item.imageUrls[3]
                            }
                            alt={`image ${index}`}
                        />
                    </>
                ))}
            </div>
            <div className={style['view-more']}>
                <button>View More</button>
            </div>
        </div>
    );
}
