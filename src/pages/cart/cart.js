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
import axios from "axios";
import config from './config';

export default  class Cart extends Component {
  constructor(props) {
    super(props);
    this.deleteCart = this.deleteCart.bind(this);
    this.state = {
      cartProducts: [],
    };
  }

  componentDidMount() {
    axios
      .get(`${config.API_URL}/cart/`)
      .then((res) => {
        this.setState({
          cartProducts: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateCart(item, option) {
    if (option === "increase") item.quantity++;
    if (option === "decrease") item.quantity--;

    const cartObject = {
      name: item.name,
      img: item.img,
      quantity: item.quantity,
      price: item.price,
    };
    axios
      .put(
        `${config.API_URL}/cart/update-product-cart/` +
          item._id,
        cartObject
      )
      .then((res) => {
        console.log(res.data);
        window.location.replace('');
        console.log("Producto actualizado en el carrito con éxito");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteCart(item) {
    axios
      .delete(`${config.API_URL}/cart/delete-product-cart/` + item._id)
      .then((res) => {
        window.location.replace('');
        console.log("Producto eliminado del carrito de compras!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  total(){
    const initialValue = 0;
     return this.state.cartProducts.reduce(
      (accumulator, currentValue) => accumulator + (currentValue.quantity * currentValue.price),
      initialValue
    );
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
                  {React.Children.toArray(
                    this.state.cartProducts.map((cartProduct) => (
                      <tr key={cartProduct._id} className="align-middle">
                        <td>
                          <img
                            src={cartProduct.img}
                            alt="img-{item.name}"
                            className="img-fluid img-thumbnail img-cart"
                          />
                        </td>
                        <td>
                          <span className="cart-product-name">
                            {cartProduct.name}
                          </span>
                        </td>
                        <td>
                          <InputGroup>
                            <Button
                              variant="dark"
                              onClick={() => this.updateCart(cartProduct, "decrease")}
                            >
                              -
                            </Button>
                            <Form.Control
                              id="inputCartQuantity"
                              type="text"
                              size="sm"
                              defaultValue={cartProduct.quantity}
                              min="1"
                            />
                            <Button
                              variant="dark"
                              onClick={() => this.updateCart(cartProduct, "increase")}
                            >
                              +
                            </Button>
                          </InputGroup>
                        </td>
                        <td>{cartProduct.price}</td>
                        <td>{cartProduct.quantity * cartProduct.price}</td>
                        <td>
                          <Button
                            variant="danger"
                            onClick={() => this.deleteCart(cartProduct)}
                          >
                            <i className="bi bi-trash3 me-2"></i>Eliminar
                          </Button>
                        </td>
                      </tr>
                    ))
                  )}
                  ;
                </tbody>
              </Table>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col sm={{ offset: 8 }}>
              <Badge pill bg="" className="cart-total">
                <h6>Total: {this.total()}</h6>
              </Badge>
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

