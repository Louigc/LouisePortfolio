import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsCodeSlash, BsBrush, BsInstagram } from "react-icons/bs";

export const Kompetencer = () => {

    return (
        <div className="kompetencer">   
            <div className="heading">
                <h1 className="heading">Mine kompetencer</h1>
                <p>Mine evner er <strong>alsidige</strong> og jeg kan lidt af det meste indenfor faget, men specielt disse er mine <strong>spidskompetencer</strong>.</p>
                <hr className="hr"></hr>
            </div>
            <Container className="container">
                <Row className="row3">

                    <Col className="col3">
                        {/* 1 KOMPETENCE BOKS */}
                        <div className="komp-box">
                            <div className="ikon">
                                <BsCodeSlash></BsCodeSlash>
                            </div>
                            <div className="projekt_meta">
                                <h1 className="projekthead">Frontend udvikling</h1>
                                <p className="projekttekst"> Jeg har et grundigt kendskab til programmeringssprog HTML5, CSS3, Javascript og React, samt erfaring med forskellige CMS systemer og frameworks som Wordpress og Bootstrap.</p>
                            </div>
                        </div>
                    </Col>

                    <Col className="col3">
                        {/* 2 KOMPETENCE BOKS */}
                        <div className="komp-box">
                            <div className="ikon">
                            <BsBrush></BsBrush>
                            </div>
                            <div className="projekt_meta">
                                <h1 className="projekthead">Grafisk design</h1>
                                <p className="projekttekst"> Jeg har en solid erfaring med at designe websider, 
                                og jeg bestræber mig altid på at skabe et moderne og brugervenligt design, som hænger sammen med virksomhedens identitet.</p>              
                            </div>
                        </div>
                    </Col>

                    <Col className="col3">
                        {/* 3 KOMPETENCE BOKS */}
                        <div className="komp-box">
                            <div className="ikon">
                                <BsInstagram></BsInstagram>
                            </div> 
                            <div className="projekt_meta">
                                <h1 className="projekthead">SoMe</h1>
                                <p className="projekttekst"> God mulighed for virksomheder at promovere sig på de sociale medier, da mange potentielle kunder benytter sig af disse.
                                    Jeg har erfaring med: Instagram, Twitter, Facebook og TikTok.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
        </Container>
    </div>
    );
}