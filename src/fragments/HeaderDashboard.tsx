import { useDispatch } from 'react-redux';
import { setShow } from 'src/redux/slice/cardShow';
import style from 'src/styles/dashboard.module.css';
export default function HeaderDashboard({ text, onClick }: any) {
    const dispatch = useDispatch();
    return (
        <div className={style['dashboard-card_header']}>
            <h1>{text}</h1>
            <button onClick={onClick}>
                <i className="bi bi-plus-circle-fill text-black"></i>
            </button>
        </div>
    );
}
