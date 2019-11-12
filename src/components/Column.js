import React, { Component } from "react";
import styled from "styled-components";

import Applications from "./Applications";

export default class Column extends Component {
  render() {
    return (
      <Container>
        <ColumnTitle>{this.props.name}</ColumnTitle>
        <Applications
          columnName={this.props.name}
          applications={this.props.applications}
        />
      </Container>
    );
  }
}

const Container = styled.div`
  width: 20%;
  height: 90vh;
  background-color: #fff;
  margin: 1rem;
  border-radius: 1px;
  border: 1px solid #e8e8e8;
  box-shadow: 0px 2px 10px #e8e8e8;
`;
const ColumnTitle = styled.h4`
  padding: 1rem;
  border-bottom: 1px solid #e8e8e8;
`;
