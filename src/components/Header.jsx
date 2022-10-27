import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <>
            <Navbar className="navbar">
                <Container>
                    <NavLink to="/" className="text-secondary navbar-brand ">WeatherApp</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-light text-decoration-none mx-1" >Home</NavLink>
                        <NavLink to="/TurkeyMap" className="text-light text-decoration-none mx-1">Turkey Map</NavLink>
                        <NavLink to="/ListOfCities" className="text-light text-decoration-none mx-1">List Of Cities</NavLink>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
}

export default Header;