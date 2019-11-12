import React, { Component } from "react";
import Application from "./Application";

export default class Applications extends Component {
  render() {
    return (
      <div className="applications">
        {this.props.applications.map(application => (
          <Application user={application.user} />
        ))}
      </div>
    );
  }
}
