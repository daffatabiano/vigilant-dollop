import { Carousel } from 'react-bootstrap';
import Navbar from 'src/fragments/Navbar';
import style from '@/styles/destination.module.css';
import CarouselBanner from 'src/fragments/CarouselBanner';

export async function getServerSideProps() {
    const resp = await fetch(
        'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/banners',
        {
            headers: {
                apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
            },
        }
    );
    const resPromo = await fetch(
        'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promos',
        {
            headers: {
                apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
            },
        }
    );
    const dataPromo = await resPromo.json();
    const data = await resp.json();
    console.log(dataPromo);
    return {
        props: { product: data.data, promo: dataPromo.data },
    };
}
export default function Destination(props: { product: any }) {
    const { product } = props;
    return (
        <>
            <Navbar />
            <div className={`${style['banner-title']}`}>
                <h1>
                    E N J O <span className={`text-warning`}> Y O U R </span>T -
                    R A V E L
                </h1>
                <p>Make Your Life Be More Fun</p>
            </div>
            <Carousel indicators={false} controls={false}>
                {product.map((item: any) => (
                    <Carousel.Item interval={2000} key={item.id}>
                        <img
                            className={'w-100'}
                            style={{ height: '50vh' }}
                            src={item.imageUrl}
                            alt={item.name}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    );
}
