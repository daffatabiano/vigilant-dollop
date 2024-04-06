
export default function Header({ text, style }: any) {
    return (
        <>
            <h1 className={style}>{text}</h1>
        </>
    );
}
