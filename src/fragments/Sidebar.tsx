import Link from 'next/link';
import { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import navbar from '@/styles/navbar.module.css';
import Icons from 'src/components/elements/SvgIcons';

export default function Sidebar() {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <>
            <button onClick={handleShow}>
                <Icons.Hamburger style={navbar.hamburger}></Icons.Hamburger>
            </button>
            <Offcanvas
                className={`${navbar.offcanvas} w-50 `}
                show={show}
                onHide={handleClose}
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className={``}>
                        <li className={'nav-item'}>
                            <Link href={'/destination'}>Destinasi</Link>
                        </li>
                        <li className={'nav-item'}>
                            <Link href={'/'}>Promo</Link>
                        </li>
                        <li className={'nav-item'}>
                            <Link href={'/'}>Blog</Link>
                        </li>
                        <li className={'nav-item'}>
                            <Link href={'/'}>Contact</Link>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
