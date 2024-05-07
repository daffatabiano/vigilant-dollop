import AuthLayout from 'src/Layout/AuthLayout';
import Footer from 'src/fragments/Footer';
import Navbar from 'src/fragments/Navbar';
import Categories from 'src/fragments/comp/Categories';
import bg from 'src/styles/destination.module.css';

export default function CategoriesPage() {
    return (
        <div className={bg['background']}>
            <AuthLayout>
                <Categories
                    onClick={() => (window.location.href = '/destination')}
                    button="← Back"
                />
            </AuthLayout>
        </div>
    );
}
