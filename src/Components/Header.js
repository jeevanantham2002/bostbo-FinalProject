import * as React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Container } from 'react-bootstrap';

class Header extends React.Component{

    constructor() {
        super();
        this.state = {
            value: ""
        }
    }

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <h1>Bostbo</h1>
                    </Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link href="#home"><h1>Where The Food Comes To You</h1></Nav.Link>
                        <Nav.Link href="#features"><h1>Shopping Cart</h1></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>




        );
    }
}

export default Header;
