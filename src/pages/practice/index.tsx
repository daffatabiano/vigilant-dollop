import usePost from 'src/hooks/usePost';
import { useDispatch } from 'react-redux';
import { clearShow } from 'src/redux/slice/cardShow';
import { useEffect, useState } from 'react';
import useGet from 'src/hooks/useGet';
import useUpload from 'src/hooks/useUpload';
import FormInput from 'src/components/elements/Form';
import { clearCreate } from 'src/redux/slice/createShow';
import style from 'src/styles/FormStyles/create_form.module.css';
import { ScrollShadow } from '@nextui-org/react';
import Input from 'src/components/elements/Form/Input';
import LoadingPage from 'src/fragments/loading';
import FilterByCategoriesId from 'src/components/elements/Filter';
import flip from 'src/styles/FormStyles/flip.module.css';

export default function Practice() {
    const dispatch = useDispatch();
    const { post } = usePost();
    const { upload } = useUpload();
    const { getData } = useGet();
    const [categories, setCategories] = useState<any>([]);
    const [promp, setPromp] = useState<any>(null);
    const [image, setImage] = useState<any>([]);
    const [fileImage, setFileImage] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<any>(false);

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

        console.log(image, 'image');
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
            const res = await post('create-activity', formData);
            if (res?.status === 200) {
                dispatch(clearShow());
                setIsLoading(true);
                setPromp(res?.data?.message);
                setTimeout(() => {
                    window.location.reload();
                    setIsLoading(false);
                }, 2000);
            }
        } catch (err: any) {
            setIsLoading(false);
            setPromp(err?.response?.data.message);
        }
    };

    const removeImage = (index: any) => {
        const newImages = image.filter((_: any, i: any) => i !== index);
        setImage(newImages);
    };

    return (
        <div style={{ backgroundColor: '#151515' }}>
            {isLoading && <LoadingPage />}
            <ScrollShadow className={`${style.container} `}>
                <FormInput className={`${style.form}`} onSubmit={handleCreate}>
                    <FilterByCategoriesId select={categories} id="categoryId" />
                    <Input
                        defaultValue={''}
                        name="title"
                        type="text"
                        placeholder="Input title"
                        text="title"
                    />
                    <label htmlFor="description" className="text-capitalize">
                        description
                    </label>
                    <textarea name="description" className="text-black" />
                    <div>
                        {image.map((images: any, index: any) => (
                            <div className={style.image} key={index}>
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
                        {promp && <p className="text-danger">{promp}</p>}

                        <button
                            className={`mt-2 ${style.upload}`}
                            type="button"
                            onClick={handleUpload}
                        >
                            Upload
                        </button>
                    </div>
                    <div className="d-flex justify-content-evenly gap-1">
                        <label htmlFor="price">
                            Price
                            <input
                                placeholder="enter price"
                                name="price"
                                type="number"
                            />
                        </label>

                        <label htmlFor="price">
                            Dicount Price
                            <input
                                placeholder="enter discount price"
                                name="price_discount"
                                type="number"
                            />
                        </label>
                    </div>
                    <div className="d-flex justify-content-evenly gap-1">
                        <label htmlFor="rating">
                            Star
                            <input
                                type="number"
                                name="rating"
                                placeholder="rate.."
                            />
                        </label>
                        <label htmlFor="total_reviews">
                            Reviews
                            <input
                                type="number"
                                name="total_reviews"
                                placeholder="reviews"
                            />
                        </label>
                    </div>
                    <Input
                        defaultValue={''}
                        name="facilities"
                        type="text"
                        placeholder="facilities"
                        text="facilities"
                    />
                    <div className="d-flex justify-content-between gap-1">
                        <label htmlFor="total_reviews">
                            Address
                            <input
                                type="text"
                                name="address"
                                placeholder="address"
                            />
                        </label>
                        <label htmlFor="total_reviews">
                            Province
                            <input
                                type="text"
                                name="province"
                                placeholder="province"
                            />
                        </label>
                        <label htmlFor="total_reviews">
                            City
                            <input type="text" name="city" placeholder="city" />
                        </label>
                    </div>
                    <label htmlFor="location_maps">Location Maps</label>
                    <textarea
                        name="location_maps"
                        className={`text-black ${style.textarea}`}
                    />
                    <div className={style.button}>
                        <button
                            onClick={() => dispatch(clearCreate())}
                            type="button"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">
                                        Loading...
                                    </span>
                                </div>
                            ) : (
                                `Close`
                            )}
                        </button>
                        <button type="submit" disabled={isLoading}>
                            {isLoading ? (
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">
                                        Loading...
                                    </span>
                                </div>
                            ) : (
                                `Submit`
                            )}
                        </button>
                    </div>
                </FormInput>
            </ScrollShadow>
        </div>
    );
}
