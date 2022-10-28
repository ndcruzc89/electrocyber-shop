import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/home.component";
import About from "./components/about.component";
import Products from "./components/products.component";
import Contact from "./components/contact.component";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Cart from "./components/cart.component";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/home"} className="nav-link">
                  ElectroCyber-Shop
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                  <Nav.Link to={"/home"} className="nav-link">Inicio</Nav.Link>
                  <Nav.Link to={"/about"} className="nav-link">Sobre Nosotros</Nav.Link>
                  <Nav.Link to={"/products"} className="nav-link">Productos</Nav.Link>
                  <Nav.Link to={"/contact"} className="nav-link">Contáctenos</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link to={"/login"} className="nav-link">Ingresar</Nav.Link>
                  <Nav.Link to={"/register"} className="nav-link">Registrarse</Nav.Link>
                  <Nav.Link to={"/cart"} className="nav-link">Car</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route exact path="/" component={(props) => <Home {...props} />} />
                  <Route exact path="/about" component={(props) => <About {...props} />} />
                  <Route exact path="/products" component={(props) => <Products {...props} />} />
                  <Route exact path="/contact" component={(props) => <Contact {...props} />} />
                  <Route exact path="/login" component={(props) => <Login {...props} />} />
                  <Route exact path="/register" component={(props) => <Register {...props} />} />
                  <Route exact path="/cart" component={(props) => <Cart {...props} />} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;