export default function ProfileIcon({
    picture = 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745',
    style,
    out,
}: any) {
    return (
        <div className={out}>
            <button>
                <img src={picture} className={style} />
            </button>
        </div>
    );
}
