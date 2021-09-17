import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import arrayBufferToBase64 from "../../utils/btb64";
import Core from "../../services/core";
import handleError from "../../services/errorHandler";
import GlobalSkeletonLoader from "components/loader/global-skeleton-loader";
import Button from 'react-bootstrap/Button';
import "../home/index.scss";
import "./index.scss";

class Product extends Component {
    static contextType = AuthContext;
    constructor(props) {
        super(props);
        this.state = {
            pageLoading: true,
            product: null
        };
    }

    componentDidMount() {
        const { dispatchWatsonDiscovery } = this.context;
        dispatchWatsonDiscovery({ type: "WATSON-DISCOVERY", res: true });
        window.scrollTo(0, 0)
        this.getProductDetails()
    }

    componentWillUnmount() {
        const { dispatchWatsonDiscovery } = this.context;
        dispatchWatsonDiscovery({ type: "WATSON-DISCOVERY", res: false });
    }

    async getProductDetails() {
        this.setState({ pageLoading: true });
        try {
            const request = {
                product_ID: this.props.match?.params?.id
            }
            const res = await Core.productInfo(request);
            if (res) {
                this.setState({product: res})
            }
        } catch (error) {
            this.setState({ errorMsg: "Error product details" });
            handleError(error);
        }
        this.setState({ pageLoading: false });
    }
    
    render() {
        const { product } = this.state

        return (
            <div className="product-wrapper">
                {
                    this.state.pageLoading 
                    ?
                    <GlobalSkeletonLoader count="1" />
                    :
                    <Container className="padding">
                        <Row>
                            <Col sm={4}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={arrayBufferToBase64(product?.image_buffer?.data)} />
                                    <Card.Body>
                                        <Card.Title className="boldStyle" style={{ fontWeight: 'bold' }}>{product?.product_name}</Card.Title>
                                        <Card.Text>
                                            Materials used: {product?.product_material}, {product?.product_sub_category}
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>Recycling code: {product?.recycling_code}</ListGroupItem>
                                        <ListGroupItem>Item uploaded on: {product?.created_dt.substr(0, product?.created_dt.indexOf('T'))}</ListGroupItem>
                                    </ListGroup>
                                </Card>
                            </Col>
                            <Col sm={8}>
                                <Card>
                                    <Card.Header as="h5">Product Name</Card.Header>
                                    <Card.Body>
                                        <Card.Title><b>{product?.product_name}</b></Card.Title>
                                        <Card.Text>
                                            Materials used: {product?.product_material}, {product?.product_sub_category}
                                        </Card.Text>
                                        <Card.Text>
                                            Quantity available: {product?.quantity}
                                        </Card.Text>
                                        <Card.Text>
                                            Seller name: {product?.seller_name}
                                        </Card.Text>
                                        <Card.Title>Price: {product?.unit_price}</Card.Title>
                                        <Row>
                                            <Col sm={6}>
                                                <Button variant="primary">Add to Cart</Button>
                                            </Col>
                                            <Col sm={6}>
                                                <Button variant="primary">
                                                    <Link to="/cart">
                                                        Go to Cart
                                                    </Link>
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                }
            </div>
        );
    }
}

export default Product;
