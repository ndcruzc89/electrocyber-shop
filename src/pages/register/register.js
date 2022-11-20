import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./register.css";
import axios from "axios";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.onChangeRegisterFirstName = this.onChangeRegisterFirstName.bind(this);
    this.onChangeRegisterLastName = this.onChangeRegisterLastName.bind(this);
    this.onChangeRegisterEmail = this.onChangeRegisterEmail.bind(this);
    this.onChangeRegisterPass = this.onChangeRegisterPass.bind(this);
    this.onChangeRegisterRepass = this.onChangeRegisterRepass.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      pass: "",
      repass: ""
    };
  }

  onChangeRegisterFirstName(e) {
    this.setState({ firstName: e.target.value });
  }

  onChangeRegisterLastName(e) {
    this.setState({ lastName: e.target.value });
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
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      pass: this.state.pass,
    };

    axios
    .post("http://localhost:4000/users/create-user", registerObject)
    .then((res) => console.log(res.data));
  this.setState({ firstName: "", lastName: "", email: "", pass: "", repass: ""});
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
                        value={this.state.firstName}
                        onChange={this.onChangeRegisterFirstName}
                        placeholder="Ingresa tu nombre"
                      />
                    </Form.Group>
                  </Col>
                  <Col sm="6">
                    <Form.Group className="mb-3 mt-4" controlId="inputRegisterSurname">
                      <Form.Label>Apellido</Form.Label>
                      <Form.Control
                        type="text"
                        value={this.state.lastName}
                        onChange={this.onChangeRegisterLastName}
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
