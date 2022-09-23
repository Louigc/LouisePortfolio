import { Container, Row, Col } from "react-bootstrap";
import { IoLocationOutline } from "react-icons/io5";

export const Reference = () => { 

return (
<section className="reference">
    <Container>
        <Row>
            <Col>
            <p className="pref"><i>
                "Louise har altid arbejdet seriøst og omhyggeligt med alle opgaver. Hun har været en af afdelingens nøgleperson og
                taget alle opgaver med et smil. Vi har været yderst tilfredse med Louises arbejdsindsats samt humør! Jeg kan derfor kun medgive hende min anbefaling til fremtidige arbejdsgivere. "</i></p>
                <h5>- Aqeel Amjad</h5>
                <p className="cita"><IoLocationOutline></IoLocationOutline><i>Varehuschef i Elgiganten Fredericia</i></p>
            </Col>
        </Row>
    </Container>
</section>
    );
}