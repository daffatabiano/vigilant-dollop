import { Button, Card, Carousel } from 'react-bootstrap';
import Navbar from 'src/fragments/Navbar';
import style from '@/styles/destination.module.css';
import SupportingFacilites from 'src/components/SupportingFacilities';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export async function getServerSideProps() {
    const apikey = '24405e01-fbc1-45a5-9f5a-be13afcd757c';
    const resp = await fetch(
        'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/banners',
        {
            headers: {
                apiKey: apikey,
            },
        }
    );
    const resPromo = await fetch(
        'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promos',
        {
            headers: {
                apiKey: apikey,
            },
        }
    );
    const resCategory = await fetch(
        'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/categories',
        {
            headers: {
                apiKey: apikey,
            },
        }
    );
    const resActivites = await fetch(
        'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/categories',
        {
            headers: {
                apiKey: apikey,
            },
        }
    );
    const dataActivites = await resActivites.json();
    const dataCategory = await resCategory.json();
    const dataPromo = await resPromo.json();
    const data = await resp.json();
    console.log(dataActivites.data);
    return {
        props: {
            product: data.data,
            promo: dataPromo.data,
            category: dataCategory.data,
            activities: dataActivites.data,
        },
    };
}
export default function Destination(props: {
    product: any;
    promo: any;
    category: any;
    activities: any;
}) {
    const { product, promo, category, activities } = props;
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    return (
        <div className="bg-secondary">
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
            <SupportingFacilites
                title="Catchy Discount"
                desc="Don't Miss it and Run Out"
            />

            <div className="d-flex mt-6">
                <div className="d-flex flex-column w-25 p-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        fill="currentColor"
                        className="bi bi-ticket-detailed"
                        viewBox="0 0 16 16"
                    >
                        <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M5 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z" />
                        <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6zM1.5 4a.5.5 0 0 0-.5.5v1.05a2.5 2.5 0 0 1 0 4.9v1.05a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1.05a2.5 2.5 0 0 1 0-4.9V4.5a.5.5 0 0 0-.5-.5z" />
                    </svg>
                    <h1 className="fs-1 fw-bold">Try to Our Promo</h1>
                </div>
                <div className="w-75">
                    <AliceCarousel infinite responsive={responsive}>
                        {promo.map((item: any) => (
                            <div key={item.id}>
                                <Card style={{ width: '18rem' }}>
                                    <img
                                        className="w-100 h-100"
                                        variant="top"
                                        src={item.imageUrl}
                                    />
                                    <Card.Body className={style['promo-cb']}>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text className="text-black">
                                            {item.description}
                                        </Card.Text>
                                        <Button variant="primary">
                                            Go somewhere
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </AliceCarousel>
                </div>
            </div>
            <div className="d-flex">
                <div className="w-75">
                    <AliceCarousel infinite responsive={responsive}>
                        {category.map((item: any) => (
                            <div key={item.id}>
                                <Card style={{ width: '18rem' }}>
                                    <img
                                        className="w-100 h-100"
                                        variant="top"
                                        src={item.imageUrl}
                                    />
                                    <Card.Body className={style['promo-cb']}>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text className="text-black">
                                            {item.description}
                                        </Card.Text>
                                        <Button variant="primary">
                                            Go somewhere
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </AliceCarousel>
                </div>
                <div className="d-flex flex-column w-25 p-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        fill="currentColor"
                        className="bi bi-ticket-detailed"
                        viewBox="0 0 16 16"
                    >
                        <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M5 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z" />
                        <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6zM1.5 4a.5.5 0 0 0-.5.5v1.05a2.5 2.5 0 0 1 0 4.9v1.05a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1.05a2.5 2.5 0 0 1 0-4.9V4.5a.5.5 0 0 0-.5-.5z" />
                    </svg>
                    <h1 className="fs-1 fw-bold">Try to Our Promo</h1>
                </div>
            </div>
            <div className="mt-6">
                <SupportingFacilites
                    title="Package Destination"
                    desc="destination package more than cheapers"
                />
            </div>
            {activities.map((item: any) => (
                <div key={item.id}>
                    <img src={item.imageUrl} alt="" />
                </div>
            ))}
        </div>
    );
}
