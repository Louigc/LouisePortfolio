import React, { Component } from 'react';
import aboutImg from '../Assets/img/louise.png';
import { Container, Row, Col } from "react-bootstrap";
import louise2 from '../Assets/img/louise2.png';
import { Skills } from './Skills';

export default class About extends Component {
    render() {
        return (
                <section className="about component_space" id="aboutme">
                        <Container>
                            <Row className="row2">
                                <Col>
                                    <img src={aboutImg} alt="Billede af mig" className="about_img"></img>
                                    <h1 className="navn">LOUISE <span>GULDBÆK</span> CHRISTIANSEN</h1>
                                    <hr className='hr3'></hr>
                                    <br></br>
                                    <img src={louise2} alt="Louise sidder udenfor" className="om_img"></img>
                                </Col>
                                <Col>
                                    <h1 className="aboutheading">Hvem er jeg?</h1>
                                    <div className="aboutme">   
                                        <p className="aboutmetext">
                                        Hejsa! Mit navn er <i>Louise</i> og jeg er 24 år gammel, og til dagligt studerer jeg Multimediedesign på 3. semester på Erhvervsakademi i Aarhus med speciale i <i>Frontend Developer</i>. Her kan min innovative og kreative sjæl få lov til, at udfolde sig og blive udfordret på alle tænklige måder.
                                        Når jeg ikke studerer, så bruger jeg min tid på mit fritidsarbejde i <i>Elgiganten</i> eller på løbebåndet nede i det lokale fitness center.
                                        <br></br><br></br>

                                        Som <i>multimediedesigner</i> har jeg tilegnet mig færdigheder inden for frontend design og programmering, user experience, content production og herunder video, foto og copywriting.
                                        Jeg har ligeledes fået kompetencer inden kodning af hjemmeside i HTML5, CSS og JavaScript, samt diverse Adobe redigerings programmer. 
                                        Jeg brænder for visuel kommunikation, grafisk design, content production og webudvikling 😄
                                        <br></br><br></br>

                                        Som person vil jeg beskrive mig selv som <i>ansvarsbevidst</i>, <i>imødekommende</i>, <i>struktureret</i> og <i>lærenem</i>. Jeg er serviceorienteret og forstår at sætte kunden i fokus. 
                                        Jeg er engageret og målrettet i de projekter jeg arbejder med og yder gerne en ekstra indsats for at sikre, at de har et tilfredsstillende resultat. Jeg er en god teamplayer, som lytter til samt hjælper mine medstuderende og kollegaer - dog kan jeg sagtens arbejde selvstændigt, hvilket jeg også nyder! 
                                        <br></br><br></br>
                                        </p>
                                        <p className="citat"> "Jeg er kreativ, engageret og ivrig efter at lære nye ting!"</p>
                                        <div className="aboutbutton">
                                            <a href="https://drive.google.com/file/d/1wda039ls3ZGk6gb3rW_pi88uIO3-Ywhi/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button className="aboutbtn">Download CV</button></a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <br></br>
                        <Skills></Skills>
                </section>
            );
        }
    }
