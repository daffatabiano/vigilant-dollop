import Link from 'next/link';

export default function List({ text }: any) {
    return (
        <>
            <li>
                <Link href={''} className="text-white">
                    {text}
                </Link>
            </li>
        </>
    );
}
