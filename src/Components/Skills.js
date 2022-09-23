import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../Assets/img/meter1.png";
import meter2 from "../Assets/img/meter2.png";
import meter3 from "../Assets/img/meter3.png";
import meter4 from "../Assets/img/meter4.png";
import meter5 from "../Assets/img/meter5.png";

export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (

        <section className="skill">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2> Mine færdigheder💡</h2>
                            <hr className="hr2"></hr>
                            <br></br>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={meter4} alt=""></img>
                                    <h5>HTML5</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt=""></img>
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt=""></img>
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={meter5} alt=""></img>
                                    <h5>WordPress</h5>
                                </div>
                                <div className="item">
                                    <img src={meter4} alt=""></img>
                                    <h5>Adobe XD</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt=""></img>
                                    <h5>Adobe Photoshop</h5>
                                </div>
                                <div className="item">
                                    <img src={meter5} alt=""></img>
                                    <h5>Adobe Premiere Pro</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt=""></img>
                                    <h5>Canva</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}