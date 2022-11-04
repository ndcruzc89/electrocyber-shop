import React, { Component }  from 'react';
import { Container, Nav, Navbar, Button, Row, Col } from "react-bootstrap";
import "./footer.css";

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
 
    render() { 
        return ( 
            <div id="footer" className="bg-dark position-absolute w-100 bottom-0">
                <Container className="text-white">
                    <Row>
                        <Col>
                            <h2>Hola</h2>
                        </Col>
                        <Col>
                            <h2>Mundo</h2>
                        </Col>
                    </Row>
                </Container>        
            </div>
         );
    }
}
 
