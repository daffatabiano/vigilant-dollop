import navbar from '@/styles/navbar.module.css';

export default function ProfileIcon({
    picture = 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745',
}: any) {
    return (
        <div>
            <button>
                <img src={picture} className={navbar.profile} />
            </button>
        </div>
    );
}
