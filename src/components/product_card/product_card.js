import React, { Component } from "react";
import { Container, Card, Button } from "react-bootstrap";
import "./product_card.css";
import productData from "./product_data";

export default class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container className="d-flex justify-content-center">
        {productData.map((item) => 
          <Card key={item.id} className="me-4">
            <Card.Img variant="top" src={item.thumb} />
            <Card.Body>
              <Card.Title>{item.product_name}</Card.Title>
              <Card.Text>
                {item.description}
              </Card.Text>
              <Card.Text>
                {item.price}
                <span>{item.currency}</span>
              </Card.Text>
              <Button variant="primary">Añadir al carrito</Button>
            </Card.Body>
          </Card>
        )};
      </Container>
    );
  }
}
