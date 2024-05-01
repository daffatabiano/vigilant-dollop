import Link from 'next/link';
import styled from 'src/styles/loading/error.module.css';

export default function Custom404() {
    return (
        <section className={styled['page_404']}>
            <div className={styled['container']}>
                <div className="row">
                    <div className="col-sm-12">
                        <div className={styled['content']}>
                            <div className={styled['four_zero_four_bg']}>
                                <img src="/images/404-drib23.gif" alt="404" />
                            </div>

                            <div className={styled['contant_box_404']}>
                                <Link
                                    href={'/destination'}
                                    className={styled['link_404']}
                                >
                                    Go to Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
