import React, { Component } from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import "./products.css";

import Hero from "../../components/hero/hero";
import productData from "./productData";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <hero>
          <Hero />
        </hero>
        <main>
          <Container className="product-container">
            <h2>Productos</h2>
            <Row>
              {productData.map((item) => (
                <Col sm="3">
                  <Card key={item.id} className="mt-4 mb-4 me-3">
                    <Card.Img
                      variant="top"
                      src={item.img}
                      className="img-fluid"
                    />
                    <Card.Body>
                      <Card.Title className="product-name">{item.name}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                      <Card.Text>
                        <Badge pill bg="" className="product-price">
                          {item.price}
                          <span> {item.currency}</span>
                        </Badge>
                      </Card.Text>
                      <Button variant="dark">Añadir al carrito</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
              ;
            </Row>
          </Container>
        </main>
      </>
    );
  }
}
