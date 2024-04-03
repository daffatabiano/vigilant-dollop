import Button from '@/components/elements/Button';
import Header from '@/components/elements/Header';
import home from '@/styles/home.module.css';

export default function Discover() {
    return (
        <>
            <main className={home['main-container']}>
                <aside>
                    <img
                        src="/images/to-ravel.jpg"
                        alt="to-ravel-find-freedom"
                    />
                </aside>
                <section className={home['discover-container']}>
                    <Header
                        style={`${home['section-header-discover']} `}
                        text="Discover Your Journey"
                    />
                    <p className={home['discover-text']}>
                        Join Us !<span> To Ravel Find Freedom</span> And Explore
                        the World with Your Vehicle&apos;s Dream !
                    </p>
                    <div className={home['section-button-container']}>
                        <Button
                            color={`${home['section-button']} ${home['button-color']}`}
                        >
                            Learn More
                        </Button>
                        <Button color={home['section-button']}>
                            Start Now
                        </Button>
                    </div>
                    <div className={home['section-avatars-containers']}>
                        <div className={home['section-avatars']}>
                            <img
                                className={home['section-avatars-img1']}
                                src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                                alt="to-ravel-find-freedom"
                            />
                        </div>
                        <div className={home['section-avatars']}>
                            <img
                                className={home['section-avatars-img2']}
                                src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                                alt="to-ravel-find-freedom"
                            />
                        </div>
                        <div className={home['section-avatars']}>
                            <img
                                className={home['section-avatars-img3']}
                                src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                                alt="to-ravel-find-freedom"
                            />
                        </div>
                        <p className="text-red-500">
                            Join now and find freedom in everything journey!
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}
