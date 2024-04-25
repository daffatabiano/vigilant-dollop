import { useEffect, useState } from 'react';
import useGet from 'src/hooks/useGet';
import usePost from 'src/hooks/usePost';
import FormInput from 'src/components/elements/Form';
import Input from '../Input';
import useUpload from 'src/hooks/useUpload';
import { input } from '@nextui-org/react';

export default function CreateCategory({ category }: any) {
    const { getData } = useGet();
    const { post } = usePost();
    const [data, setData] = useState<any>([]);
    const [image, setImage] = useState<any>('');
    const [file, setFile] = useState<any>(null);
    const { upload } = useUpload();
    const [promp, setPromp] = useState<any>('');

    useEffect(() => {
        getData(`categories`).then((res: any) => {
            setData(res?.data?.data);
        });
    }, []);

    const handleRemove = (str: any) => {
        const newImages = image.filter((_: any, i: any) => i !== str);
        setImage(newImages);
        setTimeout(() => {
            setPromp('');
        }, 2000);
        setPromp('You have successfully deleted an image');

        if (image.length === 0) {
            setPromp('Please upload an image');
        }
    };
    console.log(image[0]);

    const handleChangeFile = (e: any) => {
        const file = e.target.files[0];
        setFile(file);
        if (!file?.type?.startsWith('image/')) {
            setPromp('File should be .jpeg, .jpg or .png format');
        }
    };

    const handleUpload = async (e: any) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', file);

        try {
            const res = await upload('upload-image', formData);
            setImage([...image, res?.data?.url]);
        } catch (err: any) {
            console.log(err?.response?.data.message);
        }
    };

    const handleConfirm = async (e: any) => {
        e.preventDefault();
        const formData = {
            name: e.target.name.value,
            imageUrl: image[0],
        };

        try {
            const res = await post(`create-category`, formData).then(
                (res: any) => {
                    if (res?.status === 200) {
                        window.location.reload();
                        setPromp(res?.data?.message);
                    }
                }
            );
        } catch (err: any) {
            setPromp(err?.response?.data?.message);
        }
    };

    return (
        <>
            <FormInput onSubmit={handleConfirm} className={''}>
                {/* {promp ? <p className="text-danger">{promp}</p> : null} */}
                <Input
                    name="name"
                    type="text"
                    placeholder="Category Name"
                    defaultValue={category?.name || ''}
                    text="Category Name"
                />
                <div>
                    {image && (
                        <>
                            <img
                                src={
                                    file === null
                                        ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2yca1gMEt_rwl3IgR-1yjkwF2AdYjPQlHlFE6e8QO8A&s'
                                        : image
                                }
                                alt="category"
                                style={{ width: '100px', height: '100px' }}
                            />
                        </>
                    )}
                    <button
                        onClick={() => handleRemove(0)}
                        className="btn btn-danger"
                    >
                        Remove
                    </button>

                    {promp && <p className="text-danger">{promp}</p>}
                    <Input
                        name="image"
                        type="file"
                        placeholder="Category Image"
                        defaultValue=""
                        text="Category Image"
                        onChange={handleChangeFile}
                    />
                    <button
                        type="button"
                        onClick={handleUpload}
                        className="btn btn-success"
                    >
                        Upload
                    </button>
                </div>
                <button type="submit" className="btn btn-primary">
                    submit
                </button>
            </FormInput>
        </>
    );
}
