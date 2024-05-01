import { Placeholder } from 'react-bootstrap';

type Props = {
    name: string;
    type: string;
    placeholder: string;
    defaultValue: any;
    text: string;
    [key: string]: any;
};

export default function Input(props: Props) {
    const { name, type, placeholder, defaultValue, text, ...rest } = props;
    return (
        <>
            <label className="text-capitalize">{text}</label>
            <input
                required
                name={name}
                type={type}
                placeholder={placeholder}
                defaultValue={defaultValue}
                className="text-black"
                {...rest}
            />
        </>
    );
}
