import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../Assets/img/logo-kopi.png';

export default class NavbarComp extends Component {
    render() {
        return (
            <>
                <div>
                    <Navbar variant={"dark"} expand="lg" className="navbar">
                    <Container className="navbarcon">
                        <Navbar.Brand as={Link} to="/">
                        <img src={logo} alt="Louise Guldbæk Christiansen logo" className="img-logo"></img>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="mr-auto my-2 my-lg-0 me-auto" style={{ maxHeight: '100px' }} navbarScroll>
                                <Nav.Link as={Link} to="/">
                                    Forside
                                    </Nav.Link>
                                <Nav.Link as={Link} to="/about">
                                    Om mig
                                    </Nav.Link>
                                <Nav.Link as={Link} to="/portfolio">
                                    Portfolio
                                </Nav.Link>
                                <Nav.Link href="#contact">Kontakt mig</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                     </Container>
                    </Navbar>
                </div>
            </>
        );
    }
}
