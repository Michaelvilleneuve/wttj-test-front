import React, { Component } from "react";
import styled from "styled-components";
import Columns from "./Columns";

export default class JobOffer extends Component {
  render() {
    return (
      <Container>
        <OfferTitle>{this.props.jobOffer.name}</OfferTitle>
        <Columns columns={this.props.jobOffer.columns} />
      </Container>
    );
  }
}

const Container = styled.section``;
const OfferTitle = styled.h1`
  font-size: 1rem;
  background-color: rgb(49, 51, 59);
  padding: 1rem;
  color: #fff;
`;
