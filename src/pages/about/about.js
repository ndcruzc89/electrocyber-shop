import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./about.css";

import Hero from "../../components/hero/hero";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <header>
          <Hero />
        </header>
        <main>
          <Container className="about-container">
            <Row className="row-content">
              <Col>
                <h2>Quiénes somos</h2>
                <p>
                  Somos una tienda online dedicada a la distribución de
                  componentes electrónicos de alta calidad, 100% confiables, con
                  la mayor garantía y que satisfacen la necesidad de nuestros
                  clientes. Además, nos dedicamos a realizar proyectos
                  universitarios, empresariales o personales, relacionados con
                  todos el tema de electrónica. El cumplimiento, la calidad, una
                  entrega segura y una buena atención es lo que nos caracteriza.{" "}
                </p>
              </Col>
            </Row>
            <Row className="row-content mt-4">
              <Col>
                <Card>
                  <Card.Body className="bg-light">
                    <blockquote className="blockquote mb-0">
                      <p>
                        {" "}
                        Mantente cerca de tus clientes. Tan cerca que seas tú el
                        que les diga lo que necesitan mucho antes de que ellos
                        se den cuenta de que lo necesitan.{" "}
                      </p>
                      <footer className="blockquote-footer">
                        Steve Jobs,{" "}
                        <cite title="Source Title">fundador de Apple</cite>
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="row-content mt-4">
              <Col>
                <Card>
                  <Card.Body className="bg-light">
                    <blockquote className="blockquote mb-0">
                      <p> El precio se olvida, la calidad permanece. </p>
                      <footer className="blockquote-footer">
                        Enrique Loewe,{" "}
                        <cite title="Source Title">presidente de LOEWE</cite>
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </main>
      </>
    );
  }
}
