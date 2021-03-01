import Link from "next/link";
import Image from 'next/image'
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

export default function AppNavbar() {
    return (<Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
            <Image
                src="/images/logo.png"
                width={130}
                height={50}
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <span className="nav-link"><Link href="/">Home</Link></span>
                <span className="nav-link"><Link href="/dashboard">Dashboard</Link></span>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav>
                <span className="nav-link"><Link href="/login">Login</Link></span>
                <span className="nav-link"><Link href="/register">Register</Link></span>
                <Nav.Link>Logout</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>);
}