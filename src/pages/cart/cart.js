import React, { Component } from "react";
import { Container, Table, Form, InputGroup, Button } from "react-bootstrap";
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
                  <td><span className="text-name">{item.name}</span></td>
                  <td>
                    <InputGroup>
                      <Button className="btn-quantity">-</Button>
                      <Form.Control id="inputCartQuantity" type="text" size="sm" value="1" min="1" />
                      <Button className="btn-quantity">+</Button>
                    </InputGroup>
                  </td>
                  <td>{item.price}</td>
                  <td>4</td>
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
        </Container>
      </main>
    );
  }
}
