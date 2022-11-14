import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
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
                <Col sm="4">
                  <Card key={item.id} className="me-4">
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                      <Card.Text>
                        {item.price}
                        <span> { item.currency }</span>
                      </Card.Text>
                      <Button variant="primary">Añadir al carrito</Button>
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
