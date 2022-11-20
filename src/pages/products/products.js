import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import "./products.css";

import Hero from "../../components/hero/hero";
// import productData from "./productData";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/products/")
      .then((res) => {
        this.setState({
          products: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <header>
          <Hero />
        </header>
        <main>
          <Container className="product-container ">
            <h2>Productos</h2>
            <Row>
              {React.Children.toArray(
                this.state.products.map((item) => (
                  <Col sm="3" className="d-flex align-items-stretch">
                    <Card key={item._id} className="mb-5 me-3">
                      <Card.Img
                        variant="top"
                        src={item.img}
                        className="img-fluid"
                      />
                      <Card.Body className="d-flex flex-column">
                        <Card.Title className="product-name">
                          {item.name}
                        </Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                        <Card.Text className="mt-auto">
                          <Badge pill bg="" className="product-price">
                            {item.price}
                            <span> {item.currency}</span>
                          </Badge>
                        </Card.Text>
                        <Button variant="dark">Añadir al carrito</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              )}
              ;
            </Row>
          </Container>
        </main>
      </>
    );
  }
}
