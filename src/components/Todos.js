import React, { Component } from "react";
import TodoItems from "./TodoItems";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    return this.props.todos.map((todo, i) => (
      <TodoItems
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delete={this.props.delete}
      />
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired,
};

export default Todos;
