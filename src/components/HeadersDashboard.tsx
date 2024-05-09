import style from 'src/styles/dashboardStyles/head.module.css';

export default function HeadersDashboard({
    text = 'test',
    onClick,
}: {
    text: string;
    onClick: () => void;
}) {
    return (
        <div className={style['head']}>
            <h1>{text}</h1>
            <button onClick={onClick}>
                <i className="bi bi-plus-circle-fill text-black"></i>
            </button>
        </div>
    );
}
