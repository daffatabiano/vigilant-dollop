import { useEffect, useState } from 'react';
import AuthLayout from 'src/Layout/AuthLayout';
import CardDiscount from 'src/fragments/fragm/CardDiscount';
import useGet from 'src/hooks/useGet';
import bg from 'src/styles/destination.module.css';
import style from 'src/styles/destinationStyles/discount.module.css';

export default function DiscountView() {
    const [data, setData] = useState<any>([]);
    const { getData } = useGet();

    useEffect(() => {
        getData('promos').then((res: any) => {
            setData(res?.data?.data);
        });
    }, []);
    return (
        <div className={bg['background']}>
            <AuthLayout>
                <div className={style['discount-container']}>
                    <h6>Discount</h6>
                    <div className={style['discount-card']}>
                        {data.map((item: any) => (
                            <div key={item?.id}>
                                <CardDiscount data={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </AuthLayout>
        </div>
    );
}
