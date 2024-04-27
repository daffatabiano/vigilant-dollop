import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import Icons from 'src/components/elements/SvgIcons';
import useGet from 'src/hooks/useGet';
import style from 'src/styles/destinationStyles/activity.module.css';

export default function DetailActivityPage() {
    const { getData } = useGet();
    const router = useRouter();
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        if (router?.query?.id) {
            getData(`activity/${router?.query?.id}`).then((res) => {
                setData(res?.data?.data);
            });
        }
    }, [router?.query?.id]);

    return (
        <div className={style['detail-activity']}>
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
                    <button>BOOK</button>
                </div>
            </div>
        </div>
    );
}
