import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';
import { useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

import auth from '../lib/authServices';
import { navTree } from './../data/dashNavData';


export default function AppNavbar() {
    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }

    const handleLogout = () => {
        auth.logout();
        console.log('handleLogout')
        Router.push('/login');
    }

    const renderDropDown = (sn) => {
        return (
            <span key={sn.path} className="dropdown-item"><Link href={sn.path}>{sn.label}</Link></span>
            // <a key={sn.path} href={sn.path} className="dropdown-item">{sn.label}</a>
            // <span key={sn.path} className="dropdown-item">
            //     <Link href={sn.path}>
            //         <a>{sn.label}</a>
            //     </Link>
            // </span>
        );
    }

    const renderNav = (nav) => {
        if (!nav.subNav.length) {
            return (
                <span key={nav.path} className="nav-link">
                    <Link href={nav.path}>
                        <a>{nav.label}</a>
                    </Link>
                </span>
            );
        } else {
            return (
                <NavDropdown title={nav.label} id={nav.label} key={nav.label} show={show}
                    onMouseEnter={showDropdown}
                    onMouseLeave={hideDropdown}>
                    {nav.subNav.map((sn) => {
                        return !(sn.roles && sn.roles.length)
                            ? renderDropDown(sn)
                            : auth.hasAuthority(sn.roles)
                                ? renderDropDown(sn)
                                : null;
                    })}
                </NavDropdown>
            );
        }
    }

    return (<Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
            <Image
                src="/images/logo.png"
                width={130}
                height={50}
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                {navTree.map((nav) => {
                    return !(nav.roles && nav.roles.length)
                        ? renderNav(nav)
                        : auth.hasAuthority(nav.roles)
                            ? renderNav(nav)
                            : null;
                })}               
            </Nav>

            <Nav>
                {auth.isAuthenticated() ?
                    <>
                        <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                    </>
                    :
                    <>
                        <span className="nav-link"><Link href="/login">Login</Link></span>
                        <span className="nav-link"><Link href="/register">Register</Link></span>
                    </>
                }


            </Nav>
        </Navbar.Collapse>
    </Navbar>);
}