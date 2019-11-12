import React, { Component } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";

import ApplicationApi from "../api/application";
import Column from "./Column";

export default class Columns extends Component {
  onDragEnd({ draggableId, destination }) {
    if (!destination) return;

    ApplicationApi.move(draggableId)
      .to(destination.droppableId)
      .atIndex(destination.index);
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Container>
          {this.props.columns.map(column => (
            <Column
              key={column.name}
              name={column.name}
              applications={column.applications}
            />
          ))}
        </Container>
      </DragDropContext>
    );
  }
}

const Container = styled.div`
  height: 100vh;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: row;
`;
