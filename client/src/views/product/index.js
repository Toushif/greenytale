import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Col, Row, Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import product from "assets/images/mobile1.jpg";
import "../home/index.scss";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageLoading: true,
        };
    }

    componentDidMount() { }
    
    render() {
        return (
            <div className="product-wrapper">
                <Container className="padding">
                    <Row>
                        <Col sm={4}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={product} />
                                <Card.Body>
                                    <Card.Title>OPPO F17 (NAVY BLUE, 6GB RAM, 128GB STORAGE)</Card.Title>
                                    <Card.Text>
                                        Materials used: Materials used: Silicon, PLastic, Iron, Aluminium, Copper, Lead, Zinc, Tin, Nickel, Barium
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Recycling code: N/A</ListGroupItem>
                                    <ListGroupItem>Item uploaded on: 2021-07-31</ListGroupItem>
                                </ListGroup>
                            </Card>
                        </Col>
                        <Col sm={8}>
                            <Card>
                                <Card.Header as="h5">Product Name</Card.Header>
                                <Card.Body>
                                    <Card.Title>OPPO F17 (NAVY BLUE, 6GB RAM, 128GB STORAGE)</Card.Title>
                                    <Card.Text>
                                        Materials used: Materials used: Silicon, PLastic, Iron, Aluminium, Copper, Lead, Zinc, Tin, Nickel, Barium
                                    </Card.Text>
                                    <Row>
                                        <Col sm={6}>
                                            <Button variant="primary">Add to Cart</Button>
                                        </Col>
                                        <Col sm={6}>
                                            <Button variant="primary">Go to Cart</Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Product;
