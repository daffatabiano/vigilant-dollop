import EditCategory from 'src/components/elements/Form/CreateCategory/edit';
import bg from 'src/styles/destination.module.css';

export default function CategoryDetail() {
    return (
        <div className={`h-screen ${bg['background']}`}>
            <EditCategory />
        </div>
    );
}
