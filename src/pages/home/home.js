import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./home.css";

const homeImages = require.context("../../assets/images", true);

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container className="container-home">
        <Row className="row-home">
          <Col className="d-flex justify-content-center">
            <img
              className="img-fluid img-thumbnail img-home me-5"
              src={homeImages("./buy_from_home.jpg")}
              alt="buy-from-home"
            ></img>
            <div>
              <h2>Comprar desde casa las 24 horas</h2>
              <p>
                Podrás comprar los mejores productos de electrónica para tus
                proyectos desde casa y a cualquier hora.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="row-home">
          <Col className="d-flex justify-content-center">
            <img
              className="img-fluid img-thumbnail img-home ms-5 order-sm-last"
              src={homeImages("./help_projects.jpg")}
              alt="buy-from-home"
            ></img>
            <div className="order-sm-first">
              <h2>Te ayudamos con tus proyectos de electrónica</h2>
              <p>
                Contáctanos y cuéntanos acerca de tus proyectos universitarios,
                empresariales o personales, relacionados con electrónica, en los
                cuales necesitas ayuda. Con gusto te brindaremos el mejor
                desarrollo o la mejor solución si está a nuestro alcance.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="row-home">
          <Col className="d-flex justify-content-center">
            <img
              className="img-fluid img-thumbnail img-home me-5"
              src={homeImages("./free_shipping.jpg")}
              alt="buy-from-home"
            ></img>
            <div>
              <h2>Envíos gratis desde 90000</h2>
              <p>
                Por compras superiores a $90.000 COP tu envío será completamente
                gratis.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="row-home">
          <Col className="d-flex justify-content-center">
            <img
              className="img-fluid img-thumbnail img-home ms-5 order-sm-last"
              src={homeImages("./secure_purchase.jpg")}
              alt="buy-from-home"
            ></img>
            <div className="order-sm-first">
              <h2>Compra 100% segura</h2>
              <p>
                Recibirás tu pedido de manera facil, confiable, segura y con la
                mejor calidad.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="row-home">
          <Col className="d-flex justify-content-center">
            <img
              className="img-fluid img-thumbnail img-home me-5"
              src={homeImages("./discount.png")}
              alt="buy-from-home"
            ></img>
            <div>
              <h2>Recibe un 5% de descuento</h2>
              <p>
                Por compras superiores a $70.000 COP recibe un 5% de descuento.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
