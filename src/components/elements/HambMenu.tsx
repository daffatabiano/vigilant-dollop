import navbar from '@/styles/navbar.module.css';
import Icons from './SvgIcons';
export default function HambMenu() {
    return (
        <div>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <Icons.Hamburger style={navbar.hamburger}></Icons.Hamburger>
            </button>
        </div>
    );
}
