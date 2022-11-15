import React, { Component } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./hero.css";

export default class Hero extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() { 
        return (
            <div className="hero">
              <Container className="hero-content">
                <Row className="mb-2">
                  <Col  xs={4}>
                    <h1 className="hero-title">Un mundo de electrónica al alcance de tu hogar!</h1>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col  xs={4}>
                    <p className="hero-paragraph">ElectroCyber-Shop tiene para ti los mejores productos de electrónica y también las mejores soluciones para tus proyectos.  </p>
                  </Col>
                </Row>
                <Row >
                  <Col  xs={4}>
                    <Link to="/register" className="nav-link">
                      <Button variant="primary" type="submit">
                        Regístrarse
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </Container>
                
                
            </div>
          );
    }
}
 