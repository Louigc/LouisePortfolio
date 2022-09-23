import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import PortoItem from "./PortoItem";


export const PortItem = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://louisegchristiansen.dk/wp-json/wp/v2/portfolio");
            const data = await response.json();
            setPosts(data);
        }
        getData();
    }, []);

    return (
        <section className="portitem">
            <Container>
                <Row>
                        <Col>
                            <h2 className="heading">Portfolio</h2>
                            <p className="porti_text">Under min uddannelsen som multimediedesigner har jeg på de sidste 3 semestre arbejdet med mange forskellige projekter. <br></br>Her er nogle eksempler på det, som jeg blandt andet arbejdet med 📝</p>
                            <hr className="hr1"></hr>
                            <br></br>
                        </Col>
                    <Row>
                    <section className="container portfolio_container">
                        <div>
		                    {posts.map(post => (
		                    <PortoItem key={post.id} post={post} />
                            ))}
                        </div>
                    </section>
                    <Col>
                    </Col>
                    </Row>
                </Row>
            </Container>
        </section>
    );
 }