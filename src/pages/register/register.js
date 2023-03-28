import React, { Component } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import "./register.css";
import axios from "axios";
import config from './config';

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
      repass: "",
      inputError: {
        firstName: "",
        lastName: "",
        email: "",
        pass: "",
        repass: "",
      },
      inputValid: {
        firstName: false,
        lastName: false,
        email: false,
        pass: false,
        repass: false,
      },
      formValid: false,
      alert: {
        alertMessage: "",
        alertVariant: "",
      },
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

  handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let fieldError = this.state.inputError;
    let fieldValid = this.state.inputValid;
    switch (fieldName) {
      case "inputFirstName":
        fieldValid.firstName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value);
        fieldError.firstName = fieldValid.firstName
          ? ""
          : "El nombre solo puede contener letras y espacios.";
        break;
      case "inputLastName":
        fieldValid.lastName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value);
        fieldError.lastName = fieldValid.lastName
          ? ""
          : "El apellido solo puede contener letras y espacios.";
        break;
      case "inputEmail":
        fieldValid.email =
          /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value);
        fieldError.email = fieldValid.email
          ? ""
          : "El email debe ser una dirección de correo electrónico válida.";
        break;
      case "inputPass":
        fieldValid.pass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(
          value
        );
        fieldError.pass = fieldValid.pass
          ? ""
          : "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula";
        break;
      case "inputRepass":
        fieldValid.repass =
          /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(value) &&
          value === this.state.pass;
        fieldError.repass = fieldValid.repass
          ? ""
          : "Las contraseñas deben ser iguales";
        break;
      default:
        break;
    }
    this.setState(
      { inputError: fieldError, inputValid: fieldValid },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.inputValid.firstName &&
        this.state.inputValid.lastName &&
        this.state.inputValid.email &&
        this.state.inputValid.pass &&
        this.state.inputValid.repass,
    });
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
      .post(`${config.API_URL}/users/create-user`, registerObject)
      .then((res) => {
        console.log(res.data);
        this.setState({
          firstName: "",
          lastName: "",
          email: "",
          pass: "",
          repass: "",
          alert: {
            alertMessage: "Formulario enviado con éxito",
            alertVariant: "success",
          },
        });
        setTimeout(() => {
          this.setState({
            alert: {
              alertMessage: "",
              alertVariant: "",
            },
          })
        }, 5000);
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          alert: {
            alertMessage: "Campos inválidos o correo ya registrado",
            alertVariant: "danger",
          },
        });
        setTimeout(() => {
          this.setState({
            alert: {
              alertMessage: "",
              alertVariant: "",
            },
          })
        }, 5000);
      });
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
                    <Form.Group
                      className="mb-3 mt-4"
                      controlId="inputRegisterName"
                    >
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        type="text"
                        name="inputFirstName"
                        value={this.state.firstName}
                        placeholder="Ingresa tu nombre"
                        onChange={this.onChangeRegisterFirstName}
                        onBlur={this.handleInput}
                        onKeyUp={this.handleInput}
                      />
                      <Form.Text className="text-danger">
                        {this.state.inputError.firstName}
                      </Form.Text>
                    </Form.Group>
                  </Col>
                  <Col sm="6">
                    <Form.Group
                      className="mb-3 mt-4"
                      controlId="inputRegisterSurname"
                    >
                      <Form.Label>Apellido</Form.Label>
                      <Form.Control
                        type="text"
                        name="inputLastName"
                        value={this.state.lastName}
                        placeholder="Ingresa tu apellido"
                        onChange={this.onChangeRegisterLastName}
                        onBlur={this.handleInput}
                        onKeyUp={this.handleInput}
                      />
                      <Form.Text className="text-danger">
                        {this.state.inputError.lastName}
                      </Form.Text>
                    </Form.Group>
                  </Col>
                  <Col sm="12">
                    <Form.Group className="mb-3" controlId="inputRegisterEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="inputEmail"
                        value={this.state.email}
                        placeholder="Ingresa tu email"
                        onChange={this.onChangeRegisterEmail}
                        onBlur={this.handleInput}
                        onKeyUp={this.handleInput}
                      />
                      <Form.Text className="text-danger">
                        {this.state.inputError.email}
                      </Form.Text>
                    </Form.Group>
                  </Col>
                  <Col sm="12">
                    <Form.Group className="mb-3" controlId="inputRegisterPass">
                      <Form.Label>Contraseña</Form.Label>
                      <Form.Control
                        type="password"
                        name="inputPass"
                        value={this.state.pass}
                        placeholder="Ingresa tu contraseña"
                        onChange={this.onChangeRegisterPass}
                        onBlur={this.handleInput}
                        onKeyUp={this.handleInput}
                      />
                      <Form.Text className="text-danger">
                        {this.state.inputError.pass}
                      </Form.Text>
                    </Form.Group>
                  </Col>
                  <Col sm="12">
                    <Form.Group
                      className="mb-4"
                      controlId="inputRegisterRepass"
                    >
                      <Form.Label>Repetir contraseña</Form.Label>
                      <Form.Control
                        type="password"
                        name="inputRepass"
                        value={this.state.repass}
                        placeholder="Vuelve a ingresar tu contraseña"
                        onChange={this.onChangeRegisterRepass}
                        onBlur={this.handleInput}
                        onKeyUp={this.handleInput}
                      />
                      <Form.Text className="text-danger">
                        {this.state.inputError.repass}
                      </Form.Text>
                    </Form.Group>
                  </Col>
                  <Col sm="12">
                    <Button
                      className="w-100 mt-3 mb-5"
                      variant="primary"
                      type="submit"
                      disabled={!this.state.formValid}
                    >
                      Regístrarse
                    </Button>
                  </Col>
                  <Col sm="12">
                    <Alert variant={this.state.alert.alertVariant}>{this.state.alert.alertMessage}</Alert>
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
