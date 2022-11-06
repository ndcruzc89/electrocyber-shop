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
import { NavLink } from "react-router-dom";
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
        className="bg-dark text-white w-100 position-sticky bottom-0"
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
              <a
                href="https://es-la.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link me-3"
              >
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a
                href="https://twitter.com/?lang=es"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link me-3"
              >
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link me-3"
              >
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link me-3"
              >
                <i className="bi bi-youtube fs-4"></i>
              </a>
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
