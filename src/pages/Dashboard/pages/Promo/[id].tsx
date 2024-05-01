import EditPromo from 'src/components/elements/Form/CreatePromo/edit';
import bg from 'src/styles/destination.module.css';

export default function DetailActivity() {
    return (
        <div className={` ${bg['background']}`}>
            <EditPromo />
        </div>
    );
}
