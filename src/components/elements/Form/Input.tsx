import { Placeholder } from 'react-bootstrap';

type Props = {
    name: string;
    type: string;
    placeholder: string;
    defaultValue: string;
    text: string;
};

export default function Input(props: Props) {
    const { name, type, placeholder, defaultValue, text } = props;
    return (
        <>
            <label>{text}</label>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                defaultValue={defaultValue}
            />
        </>
    );
}
