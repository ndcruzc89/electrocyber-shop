import React, { Component } from "react";
import { Container } from 'react-bootstrap';

export default class Hero extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() { 
        return (
            <Container >
                <img src="../../assets/images/electronic_components2.jpg" alt="img-hero"/>
            </Container>
          );
    }
}
 