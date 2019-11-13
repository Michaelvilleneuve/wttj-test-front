import React, { Component } from "react";
import styled from "styled-components";

import Applications from "./Applications";

export default class Column extends Component {
  render() {
    return (
      <Container>
        <Metas>
          <Title>{this.props.name}</Title>
          <Count>{this.props.size}</Count>
        </Metas>
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
const Title = styled.h4``;
const Count = styled.span`
  background-color: rgb(175, 195, 225);
  border-radius: 1rem;
  color: #fff;
  padding: 0.5rem;
  width: 1rem;
  text-align: center;
  font-size: 0.8rem;
`;
const Metas = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e8e8e8;
  padding: 1rem;
`;
