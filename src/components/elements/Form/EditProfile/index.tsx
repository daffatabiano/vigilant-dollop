import { useDispatch } from 'react-redux';
import style from 'src/styles/FormStyles/edit_form.module.css';
import con from 'src/styles/FormStyles/create_form.module.css';
import { clearShow } from 'src/redux/slice/cardShow';
import { useEffect, useState } from 'react';
import useAuth from 'src/hooks/useAuth';
import FormInput from 'src/components/elements/Form';
import Input from '../Input';
import usePost from 'src/hooks/usePost';
import useUpload from 'src/hooks/useUpload';
import { ScrollShadow } from '@nextui-org/react';

export default function EditForm({ ...props }: any) {
    const dispatch = useDispatch();
    const [data, setData] = useState<any>([]);
    const { onLogout } = useAuth();
    const { post } = usePost();
    const { upload } = useUpload();
    const [promp, setPromp] = useState<any>('');
    const [image, setImage] = useState<any>('');
    const [fileImage, setFileImage] = useState<any>(null);

    const handleChangeFile = (e: any) => {
        const file = e.target.files[0];
        setFileImage(file);

        if (!file?.type?.startsWith('image/')) {
            setPromp('File should be .jpeg, .jpg or .png format');
        }
    };

    const removeImage = (str: string) => {
        setImage('');
    };

    const handleUpload = async (e: any) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', fileImage);

        try {
            const res = await upload('upload-image', formData);
            setImage(res?.data?.url);
        } catch (err: any) {
            console.log(err?.response?.data.message);
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            profilePictureUrl: image,
            phoneNumber: e.target.phone.value,
        };

        try {
            const res = await post('update-profile', formData);
            if (res?.status === 200) {
                setPromp(res?.data?.message);
                console.log(res);
                window.location.reload();
                dispatch(clearShow());
            }
        } catch (err: any) {
            console.log(err?.response?.data.message);
        }
    };

    useEffect(() => {
        onLogout('user', (res: any) => {
            setData(res);
        });
    }, []);

    return (
        <div {...props}>
            {promp ? <p>{promp}</p> : null}
            <ScrollShadow className={con.container}>
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
                    <label htmlFor="profilePicture">Profile Picture</label>
                    <div className={style.image}>
                        <img
                            src={
                                image.length > 0
                                    ? image
                                    : data.profilePictureUrl
                            }
                            alt={`images of ${data.name}`}
                        />
                        {/* <button type="button" onClick={() => handleRemove(0)}>
                            <i className="bi bi-trash text-danger"></i>
                        </button> */}
                        {promp && <p>{promp}</p>}
                        <div className="d-flex flex-column w-50 justify-content-between justify-content-md-evenly align-items-center">
                            <input
                                type="file"
                                name="profilePictureUrl"
                                onChange={handleChangeFile}
                                accept="image/*"
                                required
                            />
                            <button
                                className={style.upload}
                                type="button"
                                onClick={handleUpload}
                            >
                                Upload
                            </button>
                        </div>
                    </div>
                    <Input
                        text="Phone"
                        name="phone"
                        type="number"
                        placeholder="0123456789"
                        defaultValue={data.phoneNumber}
                    />
                    <div className={style.button}>
                        <button onClick={() => dispatch(clearShow())}>
                            Close
                        </button>
                        <button type="submit">Submit</button>
                    </div>
                </FormInput>
            </ScrollShadow>
        </div>
    );
}
