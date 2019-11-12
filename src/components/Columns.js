import React, { Component } from "react";
import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";

import ApplicationApi from "../api/application";

export default class Columns extends Component {
  onDragEnd({ draggableId, destination }) {
    if (destination) {
      ApplicationApi.move(draggableId).to(destination.droppableId);
    }
  }

  render() {
    return (
      <DragDropContext
        onDragUpdate={this.onDragUpdate}
        onDragEnd={this.onDragEnd}
      >
        <div className="columns">
          {this.props.columns.map(column => (
            <Column
              key={column.name}
              name={column.name}
              applications={column.applications}
            />
          ))}
        </div>
      </DragDropContext>
    );
  }
}
