import style from 'src/styles/FormStyles/create_form.module.css';
import usePost from 'src/hooks/usePost';
import { useDispatch } from 'react-redux';
// import { clearShow } from 'src/redux/slice/cardShow';
// import { ScrollShadow } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import useGet from 'src/hooks/useGet';
import useUpload from 'src/hooks/useUpload';
import { clearCreate } from 'src/redux/slice/createShow';
import Input from '../../Input';
import FormInput from 'src/components/elements/Form';
import { useRouter } from 'next/router';
export default function EditActivity() {
    const dispatch = useDispatch();
    const { post } = usePost();
    const { upload } = useUpload();
    const { getData } = useGet();
    const [data, setData] = useState<any>([]);
    const [categories, setCategories] = useState<any>([]);
    const [promp, setPromp] = useState<any>('');
    const [image, setImage] = useState<any>([]);
    const [fileImage, setFileImage] = useState<any>(null);
    const router = useRouter();

    useEffect(() => {
        if (router?.query?.id) {
            getData(`activity/${router?.query?.id}`).then((res: any) => {
                setData(res?.data?.data);
            });
        }
    }, [router?.query?.id]);

    console.log(data);

    useEffect(() => {
        getData('categories').then((res: any) => {
            setCategories(res?.data.data);
        });
    }, []);

    const handleChangeFile = (e: any) => {
        const file = e.target.files[0];
        setFileImage(file);

        if (!file?.type?.startsWith('image/')) {
            setPromp('File should be .jpeg, .jpg or .png format');
        }
    };

    const handleUpload = async (e: any) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', fileImage);

        try {
            const res = await upload('upload-image', formData);
            setImage([...image, res?.data?.url]);
        } catch (err: any) {
            console.log(err?.response?.data.message);
        }
    };

    const handleCreate = async (e: any) => {
        const categoryPick = document.getElementById(
            'categoryId'
        ) as HTMLSelectElement;
        if (!categoryPick) return;

        if (image.length === 0) {
            setPromp('Please select image');
            return;
        }

        e.preventDefault();
        const formData = {
            categoryId: categoryPick.value,
            title: e.target.title.value,
            description: e.target.description.value,
            imageUrls: image,
            price: Number(e.target.price.value),
            price_discount: Number(e.target.price_discount.value),
            rating: Number(e.target.rating.value),
            total_reviews: Number(e.target.rating.value),
            facilities: e.target.facilities.value,
            address: e.target.address.value,
            province: e.target.province.value,
            city: e.target.city.value,
            location_maps: e.target.location_maps.value,
        };

        try {
            const res = await post(`update-activity/${data?.id}`, formData);
            if (res?.status === 200) {
                window.location.href = '/Dashboard/pages/Activity';
                setPromp(res?.data?.message);
            }
            console.log(res);
        } catch (err: any) {
            setPromp(err?.response?.data.message);
        }
    };

    const removeImage = (index: any) => {
        const newImages = image.filter((_: any, i: any) => i !== index);
        setImage(newImages);
    };

    return (
        <div>
            <FormInput className={style} onSubmit={handleCreate}>
                <label htmlFor="category">Category</label>
                <select
                    className="text-black text-capitalize"
                    name="categoryId"
                    id="categoryId"
                    defaultValue={'DEFAULT'}
                    required
                >
                    <option
                        className="text-black"
                        key="nope"
                        value="DEFAULT"
                        disabled
                        selected
                    >
                        select category
                    </option>
                    {categories.map((item: any, index: any) => (
                        <option
                            className="text-black"
                            key={`category-${index}`}
                            value={`${item.id}`}
                            defaultValue={`${data?.name}`}
                        >
                            {item.name}
                        </option>
                    ))}
                </select>

                <Input
                    defaultValue={data?.title}
                    name="title"
                    type="text"
                    placeholder="Input title"
                    text="title"
                />
                <label htmlFor="description" className="text-capitalize">
                    description
                    <textarea
                        defaultValue={data?.description}
                        name="description"
                        cols={10}
                        rows={5}
                        className="text-black"
                    />
                </label>
                <div>
                    {image.map((images: any, index: any) => (
                        <div key={index}>
                            <img src={images} alt={`images ${index + 1}`} />
                            <button onClick={() => removeImage(index)}>
                                <i className="bi bi-trash text-danger"></i>
                            </button>
                        </div>
                    ))}
                    <label htmlFor="image">Image</label>
                    <input
                        type="file"
                        name="image"
                        onChange={handleChangeFile}
                        accept="image/*"
                    />
                    <button
                        className={'btn btn-primary'}
                        type="button"
                        onClick={handleUpload}
                    >
                        Upload
                    </button>
                </div>

                <Input
                    defaultValue={data?.price}
                    name="price"
                    type="number"
                    placeholder="enter price"
                    text="price"
                />
                <Input
                    defaultValue={data?.price_discount}
                    name="price_discount"
                    type="number"
                    placeholder="enter discount price"
                    text="Discount Price"
                />
                <Input
                    defaultValue={data?.rating}
                    name="rating"
                    type="number"
                    placeholder="rate..."
                    text="star"
                />

                <Input
                    defaultValue={data?.total_reviews}
                    name="total_reviews"
                    type="number"
                    placeholder="reviews"
                    text="reviews"
                />
                <Input
                    defaultValue={data?.facilities}
                    name="facilities"
                    type="text"
                    placeholder="facilites"
                    text=""
                />

                <Input
                    defaultValue={data?.address}
                    name="address"
                    type="text"
                    placeholder="address"
                    text="address"
                />
                <Input
                    defaultValue={data?.province}
                    name="province"
                    type="text"
                    placeholder="province"
                    text="province"
                />
                <Input
                    defaultValue={data?.city}
                    name="city"
                    type="text"
                    placeholder="city"
                    text="city"
                />

                <label htmlFor="location_maps">Location Maps</label>
                <textarea
                    name="location_maps"
                    className={`text-black ${style.textarea}`}
                    cols={10}
                    rows={5}
                    defaultValue={data?.location_maps}
                />
                <div>
                    <button
                        onClick={() => dispatch(clearCreate())}
                        className={'btn btn-secondary'}
                    >
                        Close
                    </button>
                    <button type="submit" className={'btn btn-success'}>
                        Submit
                    </button>
                </div>
            </FormInput>
        </div>
    );
}
