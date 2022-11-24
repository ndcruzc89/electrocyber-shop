import React, { Component } from "react";
import { Route } from "react-router-dom";

export default class HomeRoute extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={(props) => {
          <Component {...props} />;
        }}
      />
    );
  }
}
