import home from '../../styles/home.module.css';

export default function AvatarsComment({ picture, children }: any) {
    return (
        <>
            <div className={home['section-avatars-containers']}>
                <div className={home['section-avatars']}>
                    <img
                        className={home['section-avatars-img1']}
                        src={picture}
                        alt="to-ravel-find-freedom"
                    />
                </div>
                <div className={home['section-avatars']}>
                    <img
                        className={home['section-avatars-img2']}
                        src={picture}
                        alt="to-ravel-find-freedom"
                    />
                </div>
                <div className={home['section-avatars']}>
                    <img
                        className={home['section-avatars-img3']}
                        src={picture}
                        alt="to-ravel-find-freedom"
                    />
                </div>
                {children}
            </div>
        </>
    );
}
