import style from '@/styles/destination.module.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import AuthLayout from 'src/Layout/AuthLayout';
import DestinationView from '../view/Destination';

// export async function getServerSideProps() {
//     const apikey = '24405e01-fbc1-45a5-9f5a-be13afcd757c';
// const resp = await fetch(
//     'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/banners',
//     {
//         headers: {
//             apiKey: apikey,
//         },
//     }
// );
// const resPromo = await fetch(
//     'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promos',
//     {
//         headers: {
//             apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
//         },
//     }
// );
// const resCategory = await fetch(
//     'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/categories',
//     {
//         headers: {
//             apiKey: apikey,
//         },
//     }
// );
// const resActivites = await fetch(
//     'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/activities',
//     {
//         headers: {
//             apiKey: apikey,
//         },
//     }
// );
// const dataActivites = await resActivites.json();
// const dataCategory = await resCategory.json();
// const dataPromo = await resPromo.json();
// const data = await resp.json();
// console.log(dataActivites.data);
// return {
//     props: {
// product: data.data,
// promo: dataPromo.data,
// category: dataCategory.data,
// activities: dataActivites.data,
//         },
//     };
// }

export default function Destination() {
    return (
        <div className={style.background}>
            <AuthLayout>
                <DestinationView />
            </AuthLayout>
        </div>
    );
}
