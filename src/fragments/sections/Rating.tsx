import CommentRate from '@/components/CommentRate';
import ProfileIcon from '@/components/ProfilIcon';
import Header from '@/components/elements/Header';
import home from '@/styles/home.module.css';

export default function Rating() {
    return (
        <section className={home['main-rating']}>
            <Header
                style={`${home['section-header']} pt-[100px]`}
                text="Real Traveller Testimonial's"
            />
            <article className={`${home['section-icons-r']} ${home['section-icons-f']}`}>
                <CommentRate />
                <CommentRate />
                <CommentRate />
            </article>
        </section>
    );
}
