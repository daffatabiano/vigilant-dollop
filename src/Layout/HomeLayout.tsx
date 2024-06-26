import home from '@/styles/home.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from 'src/components/elements/Button/Button';

export default function HomeLayout() {
    const route = useRouter();

    return (
        <>
            <header className={home.header}>
                <img src="/images/to-ravel-header.jpg" alt="logo" />
                <div className={home['header-content']}>
                    <div>
                        <Button
                            color={`${home['button-color']} ${home['button-width']}`}
                            onClick={() =>
                                (window.location.href = '/destination')
                            }
                        >
                            Unlimited Explore !{' '}
                            <Link
                                href="/destination"
                                className="text-blue-500 underline"
                            >
                                Read More
                            </Link>
                        </Button>
                    </div>
                    <div>
                        <h1>FINDING YOUR FREEDOM HERE !</h1>
                        <p>Expolore The World with your Vehicle&apos;s dream</p>
                    </div>
                    <div className="flex">
                        <Button color={home['button-color']} disabled>
                            Learn More
                        </Button>
                        <Button
                            onClick={() =>
                                (window.location.href = '/destination')
                            }
                        >
                            Get Started
                        </Button>
                    </div>
                </div>
            </header>
        </>
    );
}
