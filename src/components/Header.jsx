import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
            <Navbar bg="secondary" variant="secondary">
                <Container>
                    <Navbar.Brand href="#home" className="text-dark">WeatherApp</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className="text-light">Home</Nav.Link>
                        <Nav.Link href="#features" className="text-light">Turkey Map</Nav.Link>
                        <Nav.Link href="#pricing" className="text-light">List Of City</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
}

export default Header;