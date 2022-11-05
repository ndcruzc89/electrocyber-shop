import React, { Component } from "react";
import { Container, Nav, Navbar, Button, Row, Col} from "react-bootstrap";
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
        className="bg-dark text-white w-100 position-absolute bottom-0"
      >
        <Container>
          <Row>
            <Col>
              <Navbar className="d-flex flex-column me-auto" bg="dark" variant="dark">
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
              <h2>Mundo</h2>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
