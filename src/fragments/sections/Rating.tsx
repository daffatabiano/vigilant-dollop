import home from '@/styles/home.module.css';
import CommentRate from 'src/components/CommentRate';
import Header from 'src/components/elements/Header';

export default function Rating() {
    return (
        <section className={home['main-rating']}>
            <Header
                style={`${home['section-header']} pt-[100px]`}
                text="Real Traveller Testimonial's"
            />
            <article className={`${home['section-icons-p']}`}>
                <CommentRate />
                <CommentRate />
                <CommentRate />
            </article>
        </section>
    );
}
