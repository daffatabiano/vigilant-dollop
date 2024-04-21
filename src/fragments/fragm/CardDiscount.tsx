import style from '@/styles/destination.module.css';
import { Button } from 'react-bootstrap';

export default function CardDiscount({ data }: any) {
    const limitDescription = (desc: any) => {
        let parse: any;
        let words = '';
        for (let i = 0; i < desc.length; i++) {
            words += desc[i];
            parse = words.split(' ');
        }
        return parse >= 10 ? words : words.slice(0, 20) + '...';
    };
    return (
        <div className={style.card}>
            <img src={data.imageUrl} alt="" />
            <div className={style['promo-cb']}>
                <h1>{data.title}</h1>
                <p>{limitDescription(data.description)}</p>
                <Button
                    onClick={() =>
                        (window.location.href = `/destination/DiscountPage/${data.id}`)
                    }
                    variant="primary"
                >
                    Detail
                </Button>
            </div>
        </div>
    );
}
