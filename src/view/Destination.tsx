import style from '@/styles/destination.module.css';
import Discount from '../fragments/comp/Discount';
import Banner from '../fragments/comp/Banner';
import Categories from '../fragments/comp/Categories';
import Activity from '../fragments/comp/Activity';
import { useEffect } from 'react';
import Animation from 'src/utils/aos';

export default function DestinationView() {
    useEffect(() => {
        Animation();
    });
    return (
        <>
            <div className={`${style['banner-title']}`}>
                <h1 data-aos="zoom-in" data-aos-once="true">
                    E N J O <span> Y O U R </span>T - R A V E L
                </h1>
                <p>Make Your Life Be More Fun</p>
            </div>
            <img
                src="https://th.bing.com/th/id/OIG3.tn3tVY9LViYfw6K8eU3N?pid=ImgGn"
                alt="maldives"
                className={style['banner-image']}
            />
            <Discount />

            <Banner
                onClick={() => {
                    window.location.href = '/destination/Categories';
                }}
                button="See More →"
            />

            <Categories
                onClick={() => {
                    window.location.href = '/destination/Categories';
                }}
                button="See All"
            />

            <Activity
                onClick={() => {
                    window.location.href = '/destination/Activity';
                }}
                button="View More"
            />
        </>
    );
}
