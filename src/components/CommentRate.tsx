import ProfileIcon from './ProfilIcon';
import home from '../styles/home.module.css';

export default function CommentRate() {
    return (
        <>
            <div className={home['rating']}>
                <header>⭐⭐⭐⭐⭐</header>
                <p className={home['discover-text']}>
                    To Ravel Find Freedom transformed my travel experience
                    completely! The ease of booking and variety of options made
                    my journey unforgettable.
                </p>
                <div className="flex items-center gap-4">
                    <ProfileIcon
                        out="w-10 h-10"
                        style="w-10 h-10 items-center"
                    />
                    <p className="leading-4 text-sm block text-gray-500">
                        <span className="sm:text-2xl text-lg  font-bold text-gray-900">
                            John Doe
                        </span>
                        <br /> Los Angeles, California
                    </p>
                </div>
            </div>
        </>
    );
}
