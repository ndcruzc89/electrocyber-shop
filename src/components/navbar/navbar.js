import React, { Component } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./navbar.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav>
        <Navbar
          fixed="top"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <Container>
            <Navbar.Brand>
              <NavLink to="/" className="nav-link">
                <span id="logo">ElectroCyber-Shop</span>
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <NavLink to="/" className="nav-link m-2">
                  Inicio
                </NavLink>
                <NavLink to="/about" className="nav-link m-2">
                  Sobre Nosotros
                </NavLink>
                <NavLink to="/products" className="nav-link m-2">
                  Productos
                </NavLink>
                <NavLink to="/contact" className="nav-link m-2">
                  Contáctenos
                </NavLink>
              </Nav>
              <Nav className="d-flex align-items-center">
                <NavLink to="/login" className="nav-link">
                  <Button variant="outline-primary" className="me-1 text-white">
                    Ingresar
                  </Button>
                </NavLink>
                <NavLink to="/register" className="nav-link">
                  <Button variant="primary" className="me-1">
                    Registrarse
                  </Button>
                </NavLink>
                <NavLink to="/cart" className="nav-link">
                  <i className="bi bi-cart fs-5"></i>
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
    );
  }
}
