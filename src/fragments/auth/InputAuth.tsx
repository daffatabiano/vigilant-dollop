type Input = {
    name: string;
    placeholder?: string;
    type?: string;
    label: string;
};

export default function InputAuth(props: Input) {
    const { label, name, placeholder, type = 'text', ...rest } = props;
    return (
        <>
            <label>{label}</label>
            <input
                {...rest}
                name={name}
                placeholder={placeholder}
                type={type}
            />
        </>
    );
}
