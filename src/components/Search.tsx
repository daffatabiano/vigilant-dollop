import Link from 'next/link';
import Icons from './elements/SvgIcons';

export default function Search() {
    return (
        <div className="">
            <Link href={'/'} className="">
                <Icons.Search style="w-16"></Icons.Search>
            </Link>
        </div>
    );
}
