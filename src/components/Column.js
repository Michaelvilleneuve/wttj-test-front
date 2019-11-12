import React, { Component } from "react";
import { Droppable } from "react-beautiful-dnd";
import Applications from "./Applications";

export default class Column extends Component {
  render() {
    return (
      <Droppable droppableId={this.props.name}>
        {provided => (
          <div
            ref={provided.innerRef}
            className="column"
            {...provided.droppableProps}
          >
            <h4>{this.props.name}</h4>
            <Applications applications={this.props.applications} />
          </div>
        )}
      </Droppable>
    );
  }
}
