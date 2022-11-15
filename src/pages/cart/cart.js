import React, { Component } from "react";
import {
  Container,
  Table,
  Row,
  Col,
  Badge,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";
import "./cart.css";

import cartData from "./cartData";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main>
        <Container className="cart-container">
          <Row>
            <Col>
              <h2>Carrito de compras</h2>
              <Table responsive striped hover className="mt-5">
                <thead>
                  <tr>
                    <th></th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Subtotal</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {cartData.map((item) => (
                    <tr key={item.id} className="align-middle">
                      <td>
                        <img
                          src={item.img}
                          alt="img-{item.name}"
                          className="img-fluid img-thumbnail img-cart"
                        />
                      </td>
                      <td>
                        <span className="cart-product-name">{item.name}</span>
                      </td>
                      <td>
                        <InputGroup>
                          <Button variant="dark">-</Button>
                          <Form.Control
                            id="inputCartQuantity"
                            type="text"
                            size="sm"
                            value={item.quantity}
                            min="1"
                          />
                          <Button variant="dark">+</Button>
                        </InputGroup>
                      </td>
                      <td>{item.price}</td>
                      <td>{item.quantity*item.price}</td>
                      <td>
                        <Button variant="danger">
                          <i className="bi bi-trash3 me-2"></i>Eliminar
                        </Button>
                      </td>
                    </tr>
                  ))}
                  ;
                </tbody>
              </Table>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col sm={{offset:8}}>
            <Badge pill bg="" className="cart-total"><h6>Total: 54700</h6></Badge>
            </Col>
            <Col>
              <Button variant="dark">Pagar</Button>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}
