import React, { Component } from "react";
import Applications from "./Applications";

export default class Column extends Component {
  render() {
    return (
      <div className="column">
        <h4>{this.props.name}</h4>
        <Applications applications={this.props.applications} />
      </div>
    );
  }
}
