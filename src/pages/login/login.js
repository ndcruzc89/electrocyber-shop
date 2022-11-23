import React, { Component } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import "./login.css";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.onChangeLoginEmail = this.onChangeLoginEmail.bind(this);
    this.onChangeLoginPass = this.onChangeLoginPass.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      pass: "",
      alert: {
        alertMessage: "",
        alertVariant: "",
      },
    };
  }

  onChangeLoginEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangeLoginPass(e) {
    this.setState({ pass: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      pass: this.state.pass,
    };

    if (!user.email || !user.pass) {
      console.log("Digite dados válidos!");
      this.setState({
        alert: {
          alertMessage: "Complete todos los campos correctamente",
          alertVariant: "danger",
        },
      });
      setTimeout(() => {
        this.setState({
          alert: {
            alertMessage: "",
            alertVariant: "",
          },
        });
      }, 5000);
    } else {
      axios
        .post("http://localhost:4000/users/login", user)
        .then((res) => {
          localStorage.setItem("utoken", res.data);
          this.setState({
            alert: {
              alertMessage: "Login exitoso",
              alertVariant: "success",
            },
          });
          setTimeout(() => {
            this.setState({
              alert: {
                alertMessage: "",
                alertVariant: "",
              },
            });
          }, 5000);
          this.props.history.push("/");
        })
        .catch((err) => {
          console.log(err.response.data);
          let errorMessage = JSON.parse(JSON.stringify(err.response.data));
          this.setState({
            alert: {
              alertMessage: "Error: " + errorMessage.err,
              alertVariant: "danger",
            },
          });
          setTimeout(() => {
            this.setState({
              alert: {
                alertMessage: "",
                alertVariant: "",
              },
            });
          }, 5000);
        });
    }
  }

  render() {
    return (
      <main>
        <Container className="login-container ">
          <Row className="justify-content-center">
            <Col
              sm="12"
              xs="12"
              md="4"
              className="login-img login-col login-col-left"
            ></Col>
            <Col md="4" className="login-col login-col-right">
              <h2 className="text-center login-title mt-5">Iniciar Sesión</h2>
              <Form onSubmit={this.onSubmit} className="px-5">
                <Form.Group className="mb-3 mt-4" controlId="inputLoginEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="inputEmail"
                    value={this.state.email}
                    placeholder="Ingresa tu email"
                    onChange={this.onChangeLoginEmail}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="inputLoginPass">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    name="inputPass"
                    value={this.state.pass}
                    placeholder="Ingresa tu contraseña"
                    onChange={this.onChangeLoginPass}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="inputLoginCheckbox">
                  <Form.Check type="checkbox" label="Recordar" />
                </Form.Group>
                <Button
                  className="w-100 mt-3 mb-5"
                  variant="primary"
                  type="submit"
                >
                  Ingresar
                </Button>
                <Alert variant={this.state.alert.alertVariant}>
                  {this.state.alert.alertMessage}
                </Alert>
              </Form>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}
