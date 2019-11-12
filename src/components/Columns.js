import React, { Component } from "react";
import Column from "./Column";

export default class Columns extends Component {
  render() {
    return (
      <div className="columns">
        {this.props.columns.map(column => (
          <Column name={column.name} applications={column.applications} />
        ))}
      </div>
    );
  }
}
