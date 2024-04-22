export default function FormInput(props: any) {
    return (
        <>
            <form className={props?.className} onSubmit={props?.onSubmit}>
                {props?.children}
            </form>
        </>
    );
}
