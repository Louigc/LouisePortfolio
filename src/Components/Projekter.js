import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import PostItem from "./PostItem";
import { Link } from "react-router-dom";

export const Projekter = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://pf-api.louisegchristiansen.dk/wp-json/wp/v2/posts");
            const data = await response.json();
						console.log(data);
            setPosts(data);
        }
        getData();
    }, []);

    return (
        <section className="projekter" id="projekter">
            <Container>
                <Row>
                    <Col>
                    <h2 className="heading">Seneste arbejde</h2>
                    <p>Her er eksempler på nogle tidligere projekter, som jeg har beskæftiget mig med <br></br> både under min uddannelse, men også i min fritid.</p>
                    <hr className="hr1"></hr>
                    <br></br>
                    </Col>
                    <Row>
                    <section className="grid-container">
		                {posts.map(post => (
		            <PostItem key={post.id} post={post} />
                    ))}
                    </section>

                    <Col>
                    <div className="projektbtn">
                   <Link as={Link} to="/portfolio"><button className="aboutbtn">Se mit portfolio</button></Link>
                    </div>
                    </Col>
                    </Row>
                </Row>
            </Container>
        </section>
    );
}
