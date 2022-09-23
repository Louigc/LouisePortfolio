import { Col, Container, Row } from "react-bootstrap";
import logo from '../Assets/img/logo-kopi.png';
import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="Mit logo"></img>
                    </Col>
                    <Col sm={6}>
                        <p>CopyRight © 2022 | Louise Guldbæk Christiansen <br></br>
                        <br></br> All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
        );
    }
}