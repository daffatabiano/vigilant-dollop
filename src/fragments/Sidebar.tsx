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
                    <div className="d-flex flex-col justify-content-between h-100">
                        <ul className={navbar.sidebar}>
                            <li className={'nav-item'}>
                                <Link href={'/destination'}>Destinasi</Link>
                            </li>
                            <li className={'nav-item'}>
                                <Link href={'/destination/DiscountPage'}>
                                    Promo
                                </Link>
                            </li>
                            <li className={'nav-item'}>
                                <Link href={'/destination/Activity'}>
                                    Popular
                                </Link>
                            </li>
                        </ul>
                        <footer className={navbar.footer}>
                            <hr />
                            <img src="/images/logo-travel.png" alt="To-Ravel" />
                            © 2022 To Ravel. All rights reserved.
                        </footer>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
