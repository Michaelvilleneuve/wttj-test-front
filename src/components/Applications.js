import React, { Component } from "react";
import Application from "./Application";

export default class Applications extends Component {
  render() {
    return (
      <div className="applications">
        {this.props.applications.map((application, index) => (
          <Application
            index={index}
            user={application.user}
            key={`${application.user.firstName}-${index}`}
          />
        ))}
      </div>
    );
  }
}
