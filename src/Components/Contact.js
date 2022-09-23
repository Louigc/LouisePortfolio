import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../Assets/img/kontaktimg.png";
import { BsInstagram, BsLinkedin, BsTwitch } from "react-icons/bs";
import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col mc={6} className="col2">
                        <img src={contactImg} alt="Kontakt mig grafik"></img>
                    </Col>
                    <Col size={12} mc={6}>
                        <h2>Kontakt mig</h2>
                        <p>Har du spørgsmål eller andet, så er du altid velkommen til at kontake mig og sende en besked! 💌 <br>
                        </br><br></br>
                        Ellers kan du også altid fange mig på mine <b>sociale medier</b>:</p>

                        <Row className="grid-container">
                        {/* 1 SOCIALE MEDIER BOKS*/}
                        <Col className="kontaktboks">
                            <a href="https://www.instagram.com/louisegchristiansen/">
                            <div className="ikon">
                                <BsInstagram></BsInstagram>
                            </div>
                            <div className="projekt_meta">
                                <h1 className="projekthead">Instagram</h1>
                                <p className="projekttekst">
                                    @Louisegchristiansen
                                </p>
                            </div>
                            </a>
                        </Col>

                        {/* 2 SOCIALE MEDIER BOKS */}
                        <Col className="kontaktboks">
                            <a href="https://www.linkedin.com/in/louise-guldb%C3%A6k-christiansen-682ba3226/">
                            <div className="ikon">
                                <BsLinkedin></BsLinkedin>
                            </div>
                            <div className="projekt_meta">
                                <h1 className="projekthead">Linkedin</h1>
                                <p className="projekttekst"> 
                                Louise Guldbæk Christiansen
                                </p>              
                            </div>
                            </a>
                    </Col>

                     {/* 3 SOCIALE MEIDER BOKS */}
                    <Col className="kontaktboks">
                            <a href="https://www.twitch.tv/louisechristiansen">
                            <div className="ikon">
                                <BsTwitch></BsTwitch>
                            </div> 
                            <div className="projekt_meta">
                                <h1 className="projekthead">Twitch.tv</h1>
                                <p className="projekttekst">
                                twitch.tv/ louisechristiansen
                                </p>
                            </div>
                            </a>
                    </Col>
                    <span>Let's be social 🫶🏼</span>
                    </Row>
                    </Col>
                </Row>
            </Container>
        </section>
        );
    }
}   