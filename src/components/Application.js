import React, { Component } from "react";

export default class Application extends Component {
  render() {
    return (
      <div className="column">
        <h5>{this.props.user.firstName}</h5>
      </div>
    );
  }
}
