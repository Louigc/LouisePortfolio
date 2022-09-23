import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './Home';
import Contact from './Contact';
import About from './About';
import Portfolio from './Portfolio';
import logo from '../Assets/img/logo-kopi.png';


export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar variant={"dark"} expand="lg" className="navbar">
                    <Container className="navbarcon">
                        <Navbar.Brand as={Link} to="/home">
                        <img src={logo} alt="Louise Guldbæk Christiansen logo" className="img-logo"></img>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0 me-auto"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/home">Forside</Nav.Link>
                                <Nav.Link as={Link} to="/about">Om mig</Nav.Link>
                                <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
                                <Nav.Link href="#contact">Kontakt mig</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                     </Container>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                    <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/contact" >
                            <Contact />
                        </Route>
                        <Route path="/portfolio">
                            <Portfolio />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}
