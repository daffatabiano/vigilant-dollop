import style from '@/styles/banner.module.css';
import { useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { Carousel } from 'react-bootstrap';
import destination from '@/styles/destination.module.css';
import useGet from 'src/hooks/useGet';
import Button from 'src/components/elements/Button/Button';
import ButtonSectionContainer from 'src/components/elements/Button/ButtonSectionContainer';
export default function Banner() {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3, itemsFit: 'contain' },
        1440: { items: 4, itemsFit: 'contain' },
    };
    const { getData, data } = useGet();
    useEffect(() => {
        getData('banners');
    }, []);

    return (
        <section className={style['banner']}>
            <div className={style['banner-title']}>
                <h1>EXPLORE WORLD!</h1>
                <div className={style['banner-content']}>
                    <div className={style['banner-text']}>
                        <p>
                            Enjoy the best family vacation with various
                            activities such as visiting amusement parks,
                            beaches, or taking local cooking classes
                        </p>
                        <ButtonSectionContainer>
                            See More →
                        </ButtonSectionContainer>
                    </div>
                    <div className={style['carousel']}>
                        <AliceCarousel
                            disableButtonsControls
                            disableDotsControls
                            disableSlideInfo
                            autoPlay
                            autoPlayStrategy="none"
                            infinite
                            autoPlayInterval={2000}
                            responsive={responsive}
                        >
                            {data.map((item: any) => (
                                <div key={item.id} className={style['card']}>
                                    <img src={item.imageUrl} alt="maldives" />
                                    <p>{item.name}</p>
                                </div>
                            ))}
                        </AliceCarousel>
                    </div>
                </div>
            </div>
            <div>
                <Carousel fade indicators={false} controls={false}>
                    {data.map((item: any) => (
                        <Carousel.Item key={item.id} interval={2000}>
                            <img
                                className={style['banner-image']}
                                src={item.imageUrl}
                                alt={item.name}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </section>
    );
}
