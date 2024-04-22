import { useDispatch } from 'react-redux';
import style from 'src/styles/edit_form.module.css';
import { clearShow } from 'src/redux/slice/cardShow';
import { useEffect, useState } from 'react';
import useAuth from 'src/hooks/useAuth';
import FormInput from '..';
import Input from '../Input';
import usePost from 'src/hooks/usePost';

export default function EditForm() {
    const dispatch = useDispatch();
    const [data, setData] = useState<any>([]);
    const { onLogout } = useAuth();
    const { post } = usePost();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            profilePicture: e.target.profilePicture.value,
            phoneNumber: e.target.phone.value,
            role: e.target.role.value,
        };
        post('update-profile', formData);
        dispatch(clearShow());
        window.location.reload();
        console.log(formData);
    };

    useEffect(() => {
        onLogout('user', (res: any) => {
            setData(res);
        });
    }, []);

    console.log(data);

    return (
        <>
            <FormInput onSubmit={handleSubmit} className={style.form}>
                <Input
                    text="Name"
                    name="name"
                    type="text"
                    placeholder="enter your name"
                    defaultValue={data.name}
                />
                <Input
                    text="Email"
                    name="email"
                    type="email"
                    placeholder="0fU9Y@example.com"
                    defaultValue={data.email}
                />
                <Input
                    text="Profile Picture"
                    name="profilePicture"
                    type="file"
                    placeholder=""
                    defaultValue=""
                />
                <Input
                    text="Phone"
                    name="phone"
                    type="number"
                    placeholder="0123456789"
                    defaultValue={data.phoneNumber}
                />
                <label className="text-black" htmlFor="role">
                    SelectRole
                    <select defaultValue={data.role} name="role">
                        <option
                            className="text-black"
                            value=""
                            disabled
                            selected
                        >
                            Select Role
                        </option>
                        <option className="text-black" value="admin">
                            admin
                        </option>
                        <option className="text-black" value="user">
                            user
                        </option>
                    </select>
                </label>
                <div className={style.button}>
                    <button onClick={() => dispatch(clearShow())}>Close</button>
                    <button type="submit">Submit</button>
                </div>
            </FormInput>
        </>
    );
}
