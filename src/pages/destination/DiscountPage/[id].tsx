import style from '@/styles/destinationStyles/discount.module.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalComponents from 'src/components/ModalComponents';
import useGet from 'src/hooks/useGet';
import { setShow } from 'src/redux/slice/cardShow';

export default function DiscountDetail() {
    const { getData } = useGet();
    const router = useRouter();
    const [promo, setPromo] = useState<any>([]);
    const isShowCode = useSelector((store: any) => store.show.show);
    const dispatch = useDispatch();

    const id = router?.query.id;
    useEffect(() => {
        if (id) {
            getData(`promo/${id}`).then((res: any) => {
                setPromo(res?.data?.data);
            });
        }
    }, [id]);
    console.log(promo);
    return (
        <div className={style['discount']}>
            {isShowCode && (
                <ModalComponents props={{ title: 'CODE PROMO' }}>
                    <div className={style['code-promo']}>
                        <p className="text-uppercase">{promo?.promo_code}</p>
                        <button
                            onClick={() =>
                                (window.location.href = `/destination`)
                            }
                        >
                            Save
                        </button>
                    </div>
                </ModalComponents>
            )}
            <div className={style['content']}>
                <div className={style['header']}>
                    <h1>{promo?.title}</h1>
                    <img src={promo?.imageUrl} alt={promo?.title}></img>
                </div>
                <div className={style['body']}>
                    <div className={style['description']}>
                        <p>
                            D E S C R I P T I O N
                            <span>{promo?.description}</span>
                            <br />
                        </p>

                        <h1>
                            <div>
                                DISCOUNT PRICE
                                <span>
                                    {Number(
                                        promo?.promo_discount_price
                                    ).toLocaleString('id-ID', {
                                        style: 'currency',
                                        currency: 'IDR',
                                    })}
                                </span>
                            </div>
                            <div>
                                MINIMUM CLAIM PRICE
                                <span>
                                    {Number(
                                        promo?.minimum_claim_price
                                    ).toLocaleString('id-ID', {
                                        style: 'currency',
                                        currency: 'IDR',
                                    })}
                                </span>
                            </div>
                        </h1>
                    </div>
                    <button onClick={() => dispatch(setShow())}>Claim</button>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: promo?.terms_condition,
                        }}
                        className={style.terms_condition}
                    ></p>
                </div>
            </div>
        </div>
    );
}
