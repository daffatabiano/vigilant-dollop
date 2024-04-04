
export default function ProfileIcon({
    picture = 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745',
    style
}: any) {
    return (
        <div>
            <button>
                <img src={picture} className={style} />
            </button>
        </div>
    );
}
