import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

export default class Application extends Component {
  render() {
    return (
      <Draggable
        draggableId={this.props.user.firstName}
        index={this.props.index}
      >
        {(provided, snapshot) => (
          <Container
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <h5>{this.props.user.firstName}</h5>
          </Container>
        )}
      </Draggable>
    );
  }
}

const Container = styled.div`
  margin: 1rem;
  border: 1px solid #e8e8e8;
  box-shadow: 0px 2px 10px #e8e8e8;
  padding: 1rem;
  background-color: #fff;
  transform: rotate3d(1, 1, 1, ${props => (props.isDragging ? "6" : "0")}deg);
`;
