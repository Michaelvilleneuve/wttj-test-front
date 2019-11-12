import React, { Component } from "react";
import { hot, setConfig } from "react-hot-loader";
import JobOffer from "./JobOffer";

import Data from "../api";

setConfig({ logLevel: "debug" });

class Root extends Component {
  componentDidMount() {
    Data.connect({
      url: "ws://localhost:4567",
      onRefresh: data => this.onMessage(data)
    });
  }

  onMessage(jobOffer) {
    this.setState({ jobOffer });
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
