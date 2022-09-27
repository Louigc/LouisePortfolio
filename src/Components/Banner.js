import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import forsideImg from "../Assets/img/louiseforsideub.png";
import { BsArrowRight } from "react-icons/bs";

export const Banner = () => {

  const [loopNum, setLoopNum] = useState(0); // Starter ved det første ord.
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [ "Web Designer", "Grafisk Designer.", "UI/UX Designer.", "SoMe Udvikler.", "Multimediedesigner." ]; // Den tekst jeg ønsker, som skal ændre sig på min forside.
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100); // Hvor hurtigt hver bogstav bliver skrevet.
  const period = 1800; // Hvor langtid der går i mellem hvert ord dukker op. 

  useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);

  return () => { clearInterval(ticker) };
      }, [delta, text])

  const tick = () => {
  let i = loopNum % toRotate.length;
  let fullText = toRotate[i];
  let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

  setText(updatedText);

  if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500); 
      } 
    }
  
  return (
      <section className="banner" id="home">
          <Container>
              <Row className="align-items-center">
                  {/* Her er teksten på vores forside */}
                  <Col xs={12} md={6} xl={7}>
                      <span className="tagline">Velkommen til min verden!</span>
                      <h1>{`Hejsa! Jeg er Louise Guldbæk Christiansen`} <br></br>
                      <span className="wrap">{text}</span></h1>
                      <p>A multimedia desginer passionate about creating simple yet innovative experiences for users.</p>
                     <a href="#projekter"><button onClick={() => console.log('contact')}>Mine seneste projekter<BsArrowRight size={22}></BsArrowRight></button></a>
                  </Col>
                    {/* Her er mit billede på forsiden */}
                  <Col xs={12} md={6} xl={5}>
                      <img src={forsideImg} alt="Forside billede"></img>
                  </Col>
              </Row>
          </Container>
      </section>
  );
}