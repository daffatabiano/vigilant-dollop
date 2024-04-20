import AuthLayout from 'src/Layout/AuthLayout';
import HomeView from './view/Home';

export default function Home() {
    return (
        <AuthLayout>
            <HomeView />
        </AuthLayout>
    );
}
