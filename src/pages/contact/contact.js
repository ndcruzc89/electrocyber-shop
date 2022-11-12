import React, { Component } from "react";

import Hero from "../../components/hero/hero";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <hero>
          <Hero />
        </hero>
        <main>
          <div style={{ marginTop: 200 }}>
            <h3>Esta es la pagina de Contact</h3>
          </div>
        </main>
      </>
    );
  }
}
