import ProfileIcon from './ProfilIcon';
import home from '../styles/home.module.css';

export default function CommentRate() {
    return (
        <>
            <div className={home['rating']}>
                <em>⭐⭐⭐⭐⭐</em>
                <p className={home['discover-text']}>
                    To Ravel Find Freedom transformed my travel experience
                    completely! The ease of booking and variety of options made
                    my journey unforgettable.
                </p>
                <div className="flex items-center gap-4">
                    <ProfileIcon style="w-10 h-10" />
                    <p className="leading-4 text-sm text-gray-500">
                        <span className="text-2xl font-bold text-gray-900">John Doe</span>
                        <br /> Los Angeles, California
                    </p>
                </div>
            </div>
        </>
    );
}
