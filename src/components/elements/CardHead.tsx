import home from '../../styles/home.module.css';
import Button from './Button/Button';
import ButtonSectionContainer from './Button/ButtonSectionContainer';
import Header from './Header';

export default function CardHead({ textbutton,children,desc }: any) {
    return (
        <header className={home['section-card-head']}>
            <Button
                color={`${home['button']} bg-transparent text-secondary border border-secondary-subtle`}
            >
                {textbutton}
            </Button>
            {children}
            <p className="text-secondary fw-semibold mb-3">
                {desc}
            </p>
            <hr className="border-secondary border-2" />
        </header>
    );
}
