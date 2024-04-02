import Link from 'next/link';
import navbar from '@/styles/navbar.module.css';
import Icons from './SvgIcons';
export default function HambMenu() {
    return (
        <div>
            <button type="button">
                <Icons.Hamburger style={navbar.hamburger}></Icons.Hamburger>
            </button>
        </div>
    );
}
