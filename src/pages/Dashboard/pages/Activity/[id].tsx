import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CreateActivity from 'src/components/elements/Form/CreateActivity';
import EditActivity from 'src/components/elements/Form/CreateActivity/edit';
import useGet from 'src/hooks/useGet';

export default function DetailActivity() {
    return (
        <>
            <EditActivity />
            {/* <h1 className="text-black">{data?.title}</h1>
            <h1 className="text-black">{data?.description}</h1>
            <img src={data?.imageUrls} alt={data?.title} />
            <p className="text-black">{data?.price}</p>
            <p className="text-black">{data?.price_discount}</p>
            <p className="text-black">{data?.rating}</p>
            <p className="text-black">{data?.total_reviews}</p>
            <p className="text-black">{data?.facilities}</p>
            <p className="text-black">{data?.address}</p>
            <p className="text-black">{data?.province}</p>
            <p className="text-black">{data?.city}</p>
            
            <div dangerouslySetInnerHTML={{ __html: showMap }}></div> */}
        </>
    );
}
