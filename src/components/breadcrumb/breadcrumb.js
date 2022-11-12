import React, { Component } from "react";
import { Breadcrumb } from 'react-bootstrap';

export default class BreadcrumbComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() { 
        return ( 
            <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
          </Breadcrumb>
         );
    }
}
 
