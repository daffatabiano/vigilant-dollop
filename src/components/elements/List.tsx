import Link from 'next/link';

export default function List({ text, style = 'text-white' }: any) {
    return (
        <>
            <li>
                <Link href={''} className={style}>
                    {text}
                </Link>
            </li>
        </>
    );
}
