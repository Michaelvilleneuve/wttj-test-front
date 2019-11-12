import React, { Component } from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

import Application from "./Application";

export default class Applications extends Component {
  render() {
    return (
      <Droppable droppableId={this.props.columnName}>
        {provided => (
          <Inside ref={provided.innerRef} {...provided.droppableProps}>
            {this.props.applications.map((application, index) => (
              <Application
                index={index}
                user={application.user}
                key={`${application.user.firstName}-${index}`}
              />
            ))}
            {provided.placeholder}
          </Inside>
        )}
      </Droppable>
    );
  }
}

const Inside = styled.div`
  height: 100%;
`;
