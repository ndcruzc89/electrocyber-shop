import React, { Component } from "react";
import { Container, Row, Col} from "react-bootstrap";
import "./products.css";

import ProductCard  from  "../../components/product_card/product_card"

export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container className="container-products">
                <h2>Productos</h2>
                <Row>
                    <Col>
                        <ProductCard/>
                    </Col>
                </Row>
           
          </Container>
        );
    }
}