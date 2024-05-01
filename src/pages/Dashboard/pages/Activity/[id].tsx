import EditActivity from 'src/components/elements/Form/CreateActivity/edit';
import bg from 'src/styles/destination.module.css';

export default function DetailActivity() {
    return (
        <div className={bg['background']}>
            <EditActivity />
        </div>
    );
}
