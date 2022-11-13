import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./contact.css";

import Hero from "../../components/hero/hero";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.onChangeContactName = this.onChangeContactName.bind(this);
    this.onChangeContactEmail = this.onChangeContactEmail.bind(this);
    this.onChangeContactSubject = this.onChangeContactSubject.bind(this);
    this.onChangeContactMessage = this.onChangeContactMessage.bind(this);

    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  }

  onChangeContactName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeContactEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangeContactSubject(e) {
    this.setState({ subject: e.target.value });
  }

  onChangeContactMessage(e) {
    this.setState({ message: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const contactObject = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message,
    };
  }

  render() {
    return (
      <>
        <hero>
          <Hero />
        </hero>
        <main>
          <Container className="contact-container">
            <Row>
              <Col sm="12" xs="12" md={{ span: 4, offset: 4 }} className="contact-col">
                <h2 className="text-center contact-title mt-5">Contacto</h2>
                <Form onSubmit={this.onSubmit} className="px-5">
                  <Form.Group
                    className="mb-3 mt-4"
                    controlId="inputContactName"
                  >
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.name}
                      onChange={this.onChangeContactName}
                      placeholder="Ingresa tu nombre"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="inputContactEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={this.state.email}
                      onChange={this.onChangeContactEmail}
                      placeholder="Ingresa tu email"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="inputContactSubject">
                    <Form.Label>Asunto</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.subject}
                      onChange={this.onChangeContactSubject}
                      placeholder="Ingresa el tipo de asunto"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="inputContactMessage">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      value={this.state.message}
                      onChange={this.onChangeContactMessage}
                      placeholder="Ingresa el mensaje"
                    />
                  </Form.Group>

                  <Button
                    className="w-100 mt-3 mb-5"
                    variant="primary"
                    type="submit"
                  >
                    Enviar
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </main>
      </>
    );
  }
}
