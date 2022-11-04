import React, { Component } from "react";

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={{marginTop: 200}}>
                <h3>Esta es la pagina de About</h3>
            </div>
        );
    }
}