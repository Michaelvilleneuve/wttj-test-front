import React, { Component } from "react";
import { hot, setConfig } from "react-hot-loader";
import styled from "styled-components";
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
      <App>
        <Navbar />
        <JobOffer jobOffer={this.state.jobOffer} />
      </App>
    );
  }
}

const App = styled.div`
  padding-top: 2.625rem;
`;
const Navbar = styled.nav`
  position: fixed;
  background-color: rgb(55, 203, 169);
  height: 2.625rem;
  top: 0;
  width: 100%;
`;

export default hot(module)(Root);
