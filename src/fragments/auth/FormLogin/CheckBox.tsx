import style from 'src/styles/auth.module.css';

export default function CheckBox() {
    return (
        <>
            <div className={style['form-checkbox']}>
                <input type="checkbox" className={'form-check-input'} />
                <span className={'text-black ms-2 fw-light'}>Remember me</span>
            </div>
            <a className="underline">Forgot password?</a>
        </>
    );
}
