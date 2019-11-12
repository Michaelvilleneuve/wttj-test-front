import React, { Component } from "react";
import Columns from "./Columns";

export default class JobOffer extends Component {
  render() {
    return (
      <section className="job-offer">
        <h3>{this.props.jobOffer.name}</h3>
        <Columns columns={this.props.jobOffer.columns} />
      </section>
    );
  }
}
