import React, { Component } from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import "./products.css";
import axios from "axios";
import config from '../../config/config';

import Hero from "../../components/hero/hero";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.addCart = this.addCart.bind(this);
    this.state = {
      counter: 0,
      products: [],
      cartProducts: [],
    };
  }

  componentDidMount() {
    console.log(config.API_URL);
    axios
      .get(`${config.API_URL}/products/`)
      .then((res) => {
        this.setState({
          products: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addCart(item) {
    const cartObject = {
      name: item.name,
      img: item.img,
      quantity: 1,
      price: item.price,
    };
    axios
      .post(`${config.API_URL}/cart/add-product-cart`, cartObject)
      .then((res) => console.log(res.data));
    console.log("añadido al carrito");
    console.log(this.state.counter);
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
                this.state.products.map((product) => (
                  <Col sm="3" className="d-flex align-items-stretch">
                    <Card key={product._id} className="mb-5 me-3">
                      <Card.Img
                        variant="top"
                        src={product.img}
                        className="img-fluid"
                      />
                      <Card.Body className="d-flex flex-column">
                        <Card.Title className="product-name">
                          {product.name}
                        </Card.Title>
                        <Card.Text>{product.description}</Card.Text>
                        <Card.Text className="mt-auto">
                          <Badge pill bg="" className="product-price">
                            {product.price}
                            <span> {product.currency}</span>
                          </Badge>
                        </Card.Text>
                        <Button
                          variant="dark"
                          onClick={() => this.addCart(product)}
                        >
                          Añadir al carrito
                        </Button>
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
