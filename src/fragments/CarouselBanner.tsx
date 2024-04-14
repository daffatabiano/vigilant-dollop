import { Carousel } from 'react-bootstrap';

export default function CarouselBanner({ props, key }: any) {
    return (
        <>
            <Carousel.Item interval={2000} key={key}>
                <img
                    className={'w-100'}
                    style={{ height: '50vh' }}
                    src={props.imageUrl}
                    alt={props.name}
                />
            </Carousel.Item>
        </>
    );
}
