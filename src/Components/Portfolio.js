import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { PortItem } from './PortItem';


export default class Portfolio extends Component {
    
    render() {
        return (
            <sektion class="portfolio">
                <PortItem></PortItem>
                <Container>
                    <Row>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </sektion>
        )
    }
}