import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd";

export default class Application extends Component {
  render() {
    return (
      <Draggable
        draggableId={this.props.user.firstName}
        index={this.props.index}
      >
        {provided => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="column"
          >
            <h5>{this.props.user.firstName}</h5>
          </div>
        )}
      </Draggable>
    );
  }
}
