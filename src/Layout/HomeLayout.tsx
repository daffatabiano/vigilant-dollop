import home from '@/styles/home.module.css';
import Button from '@/components/elements/Button/Button';
import { useRouter } from 'next/router';

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
                        >
                            Unlimited Explore !{' '}
                            <a href="" className="text-blue-500 underline">
                                Read More
                            </a>
                        </Button>
                    </div>
                    <div>
                        <h1>FINDING YOUR FREEDOM HERE !</h1>
                        <p>Expolore The World with your Vehicle&apos;s dream</p>
                    </div>
                    <div className="flex">
                        <Button color={home['button-color']}>Learn More</Button>
                        <Button onClick={() => route.push('/auth/login')}>
                            Get Started
                        </Button>
                    </div>
                </div>
            </header>
        </>
    );
}
