import EditBanner from 'src/components/elements/Form/CreateBanner/edit';
import bg from 'src/styles/destination.module.css';

export default function BannerDetail() {
    return (
        <div className={`h-screen  ${bg.background}`}>
            <EditBanner />
        </div>
    );
}
