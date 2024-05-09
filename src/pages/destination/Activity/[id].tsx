import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalComponents from 'src/components/Modals/ModalComponents';
import useGet from 'src/hooks/useGet';
import { setShow } from 'src/redux/slice/cardShow';
import style from 'src/styles/destinationStyles/activity.module.css';

export default function DetailActivityPage() {
    const { getData } = useGet();
    const router = useRouter();
    const [data, setData] = useState<any>([]);
    const dispatch = useDispatch();
    const isShowModal = useSelector((store: any) => store.show.show);
    const maps =
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d167998.3444873436!2d2.051699629724517!3d48.85870365186922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20Prancis!5e0!3m2!1sid!2sid!4v1714211288266!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

    useEffect(() => {
        if (router?.query?.id) {
            getData(`activity/${router?.query?.id}`).then((res) => {
                setData(res?.data?.data);
            });
        }
    }, [router?.query?.id]);

    return (
        <div className={style['detail-activity']}>
            {isShowModal && (
                <ModalComponents
                    props={{ title: `Detail Book ${data?.title}` }}
                >
                    <div className={style['modal']}>
                        <h1>{data?.title}</h1>
                        <p>{data?.description}</p>
                    </div>
                    <div className={style['modal-button']}>
                        <p>
                            {data?.price.toLocaleString('id-ID', {
                                style: 'currency',
                                currency: 'IDR',
                            })}
                        </p>
                        <button
                            onClick={() =>
                                (window.location.href = '/destination')
                            }
                        >
                            Book
                        </button>
                    </div>
                </ModalComponents>
            )}
            <div className={style['detail-activity-head']}>
                <div className={style['detail-head-image']}>
                    <img src={data?.imageUrls} alt="" />
                    <p>
                        <i className="bi bi-star-fill text-warning"></i>
                        {data?.rating}
                    </p>
                </div>
                <div className={style['detail-head-text']}>
                    <h1>{data?.title}</h1>
                    <p>
                        <span>Total review&apos;s</span>
                        {data?.total_reviews} View&apos;s
                    </p>
                </div>
            </div>
            <div className={style['detail-activity-body']}>
                <div className={style['description-facilities']}>
                    <div className={style['description']}>
                        <h1>Description</h1>
                        <p>{data?.description}</p>
                    </div>
                    <div className={style['facilities']}>
                        <h1>Facilities</h1>
                        <p>fasilitas{data?.facilities}</p>
                    </div>
                </div>
                <div className={style['detail-activity-body-map']}>
                    <div
                        className={style['map']}
                        dangerouslySetInnerHTML={{
                            __html: data?.location_maps,
                        }}
                    ></div>
                    <div className={style['map-locations']}>
                        <h1>
                            <span>
                                <i className="bi bi-geo"></i> Address
                            </span>{' '}
                            {data?.address}
                        </h1>
                        <h2>
                            <span>
                                <i className="bi bi-geo-alt"></i> Province
                            </span>
                            {data?.province}
                        </h2>
                        <h3>
                            <span>
                                <i className="bi bi-buildings"></i> City
                            </span>
                            {data?.city}
                        </h3>
                    </div>
                </div>
                <div className={style['book-button']}>
                    <h1>
                        {Number(data?.price_discount).toLocaleString('id-ID', {
                            style: 'currency',
                            currency: 'IDR',
                        })}
                        <span>
                            {data?.price?.toLocaleString('id-ID', {
                                style: 'currency',
                                currency: 'IDR',
                            })}
                        </span>
                    </h1>
                    <button onClick={() => dispatch(setShow())}>BOOK</button>
                </div>
            </div>
        </div>
    );
}
