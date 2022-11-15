import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./register.css";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.onChangeRegisterName = this.onChangeRegisterName.bind(this);
    this.onChangeRegisterSurname = this.onChangeRegisterSurname.bind(this);
    this.onChangeRegisterEmail = this.onChangeRegisterEmail.bind(this);
    this.onChangeRegisterPass = this.onChangeRegisterPass.bind(this);
    this.onChangeRegisterRepass = this.onChangeRegisterRepass.bind(this);

    this.state = {
      name: "",
      surname: "",
      email: "",
      pass: "",
      repass: "",
    };
  }

  onChangeRegisterName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeRegisterSurname(e) {
    this.setState({ surname: e.target.value });
  }

  onChangeRegisterEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangeRegisterPass(e) {
    this.setState({ pass: e.target.value });
  }

  onChangeRegisterRepass(e) {
    this.setState({ repass: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const registerObject = {
      name: this.state.name,
      surname: this.state.surname,
      email: this.state.email,
      pass: this.state.pass,
      repass: this.state.repass,
    };
  }

  render() {
    return (
      <main>
        <Container className="register-container ">
          <Row className="justify-content-center">
            <Col
              sm="12"
              xs="12"
              md="4"
              className="register-col register-col-left"
            >
              <h2 className="text-center register-title mt-5">Regístrarse</h2>
              <Form onSubmit={this.onSubmit} className="px-4">
                <Row>
                  <Col sm="6">
                    <Form.Group className="mb-3 mt-4" controlId="inputRegisterName">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        type="text"
                        value={this.state.name}
                        onChange={this.onChangeRegisterName}
                        placeholder="Ingresa tu nombre"
                      />
                    </Form.Group>
                  </Col>
                  <Col sm="6">
                    <Form.Group className="mb-3 mt-4" controlId="inputRegisterSurname">
                      <Form.Label>Apellido</Form.Label>
                      <Form.Control
                        type="text"
                        value={this.state.surname}
                        onChange={this.onChangeRegisterSurname}
                        placeholder="Ingresa tu apellido"
                      />
                    </Form.Group>
                  </Col>
                  <Col sm="12">
                    <Form.Group className="mb-3" controlId="inputRegisterEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        value={this.state.email}
                        onChange={this.onChangeRegisterEmail}
                        placeholder="Ingresa tu email"
                      />
                    </Form.Group>
                  </Col>
                  <Col sm="12">
                    <Form.Group className="mb-3" controlId="inputRegisterPass">
                      <Form.Label>Contraseña</Form.Label>
                      <Form.Control
                        type="password"
                        value={this.state.pass}
                        onChange={this.onChangeRegisterPass}
                        placeholder="Ingresa tu contraseña"
                      />
                    </Form.Group>
                  </Col>
                  <Col sm="12">
                    <Form.Group className="mb-4" controlId="inputRegisterRepass">
                      <Form.Label>Repetir contraseña</Form.Label>
                      <Form.Control
                        type="password"
                        value={this.state.repass}
                        onChange={this.onChangeRegisterRepass}
                        placeholder="Vuelve a ingresar tu contraseña"
                      />
                    </Form.Group>
                  </Col>
                  <Col sm="12">
                    <Button
                      className="w-100 mt-3 mb-5"
                      variant="primary"
                      type="submit"
                    >
                      Regístrarse
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col
              sm="12"
              xs="12"
              md="4"
              className="register-img register-col register-col-right"
            ></Col>
          </Row>
        </Container>
      </main>
    );
  }
}
