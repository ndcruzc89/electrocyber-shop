import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./home.css";

import Hero from "../../components/hero/hero";

const homeImages = require.context("../../assets/images", true);

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const homeData = [
      {
        id: 1,
        classnameImg: "img-fluid img-thumbnail img-home me-5",
        srcImg: homeImages("./buy_from_home.jpg"),
        altImg: "buy-from-home",
        classnameText: "",
        subtitle: "Comprar desde casa las 24 horas",
        paragraph:
          "Podrás comprar los mejores productos de electrónica para tus proyectos desde casa y a cualquier hora.",
      },
      {
        id: 2,
        classnameImg: "img-fluid img-thumbnail img-home ms-5 order-sm-last",
        srcImg: homeImages("./help_projects.jpg"),
        altImg: "help_projects",
        classnameText: "order-sm-first",
        subtitle: "Te ayudamos con tus proyectos de electrónica",
        paragraph:
          "Contáctanos y cuéntanos acerca de tus proyectos universitarios, empresariales o personales, relacionados con electrónica, en los cuales necesitas ayuda. Con gusto te brindaremos el mejor desarrollo o la mejor solución si está  a nuestro alcance.",
      },
      {
        id: 3,
        classnameImg: "img-fluid img-thumbnail img-home me-5",
        srcImg: homeImages("./free_shipping.jpg"),
        altImg: "free_shipping",
        classnameText: "",
        subtitle: "Envíos gratis desde 90000",
        paragraph:
          "Por compras superiores a $90.000 COP tu envío será completamente gratis.",
      },
      {
        id: 4,
        classnameImg: "img-fluid img-thumbnail img-home ms-5 order-sm-last",
        srcImg: homeImages("./secure_purchase.jpg"),
        altImg: "secure_purchase",
        classnameText: "order-sm-first",
        subtitle: "Compra 100% segura",
        paragraph:
          "Recibirás tu pedido de manera facil, confiable, segura y con la mejor calidad.",
      },
      {
        id: 5,
        classnameImg: "img-fluid img-thumbnail img-home me-5",
        srcImg: homeImages("./discount.png"),
        altImg: "discount",
        classnameText: "",
        subtitle: "Recibe un 5% de descuento",
        paragraph:
          "Por compras superiores a $70.000 COP recibe un 5% de descuento",
      },
    ];
    return (
      <>
        <hero>
          <Hero />
        </hero>
        <main>
          <Container className="home-container">
            {homeData.map((item) => (
              <Row className="row-home">
                <Col className="d-flex justify-content-center ">
                  <img
                    className={item.classnameImg}
                    src={item.srcImg}
                    alt={item.altImg}
                  ></img>
                  <div className={item.classnameText}>
                    <h2 className="mb-3">{item.subtitle}</h2>
                    <p className="home-paragraph">{item.paragraph}</p>
                  </div>
                </Col>
              </Row>
            ))}{" "}
            ;
          </Container>
        </main>
      </>
    );
  }
}
