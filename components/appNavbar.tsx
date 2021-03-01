import Image from 'next/image';
import Link from 'next/link';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';


export default function AppNavbar({ auth, logout }: { auth: boolean, logout: any }) {
    
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
                <span className="nav-link"><Link href="/">Home </Link></span>
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
                {auth ?
                    <>
                        <Nav.Link onClick={logout}>Logout</Nav.Link>
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