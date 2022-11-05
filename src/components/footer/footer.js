import React, { Component } from "react";
import {
  Container,
  Nav,
  Navbar,
  Form,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "./footer.css";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        id="footer"
        className="bg-dark text-white w-100 position-absolute bottom-0"
      >
        <Container>
          <Row>
            <Col>
              <Navbar className="d-flex flex-column" bg="dark" variant="dark">
                <Navbar.Brand>
                  <NavLink to="/" className="nav-link">
                    <span id="logo-footer">ElectroCyber-Shop</span>
                  </NavLink>
                </Navbar.Brand>
                <Nav className="d-block">
                  <NavLink to="/" className="nav-link">
                    Inicio
                  </NavLink>
                  <NavLink to="/about" className="nav-link">
                    Sobre Nosotros
                  </NavLink>
                  <NavLink to="/products" className="nav-link">
                    Productos
                  </NavLink>
                  <NavLink to="/contact" className="nav-link">
                    Contáctenos
                  </NavLink>
                </Nav>
              </Navbar>
            </Col>
            <Col>
              <h5 className="titleNewsletter pt-3">
                Suscrítete a nuestro Newsletter
              </h5>
              <p>
                Únete a nuestro newsletter para recibir noticias interesantes,
                ofertas especiales y más.
              </p>
              <Form className="d-flex form">
                <Form.Control
                  className="me-2"
                  type="email"
                  placeholder="Ingresa tu email"
                />
                <Button variant="primary" type="submit">
                  Suscribirse
                </Button>
              </Form>
            </Col>
          </Row>
          <hr></hr>
          <Row className="mb-2">
            <Col className="d-flex justify-content-center">
                <Link to="https://es-la.facebook.com" className="nav-link me-3">
                    <i className="bi bi-facebook fs-4"></i>
                </Link>
                <Link to="https://twitter.com/?lang=es" className="nav-link me-3">
                    <i className="bi bi-twitter fs-4"></i>
                </Link>
                <Link to="https://www.instagram.com" className="nav-link me-3">
                    <i className="bi bi-instagram fs-4"></i>
                </Link>
                <Link to="https://www.youtube.com" className="nav-link me-3">
                    <i className="bi bi-youtube fs-4"></i>
                </Link>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
                <span className="text-muted">
                Nelson Cruz &copy; All Rights Reserved
                </span>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
