import React, { Component } from "react";
import { hot, setConfig } from "react-hot-loader";
import JobOffer from "./JobOffer";

import api from "../api";

setConfig({ logLevel: "debug" });

class Root extends Component {
  componentDidMount() {
    api.onRefresh(jobOffer => this.setState({ jobOffer }));
  }

  render() {
    if (!this.state) return "chargement ...";

    return (
      <section className="app">
        <JobOffer jobOffer={this.state.jobOffer} />
      </section>
    );
  }
}
export default hot(module)(Root);
