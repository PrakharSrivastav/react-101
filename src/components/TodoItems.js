import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItems extends Component {
  getStyle = () => {
    return {
      backgroundColor: "#f4f4f4",
      padding: "10px",
      bottomBottom: "1px #ccc dotted",
      marginBottom: "1px",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  getCheckStyle = () => {
    return {
      marginRight: "5px",
    };
  };
  getButtonStyle = () => {
    return {
      padding: " 3px",
      float: "right",
      backgroundColor: "#ff0000",
      borderRadius: "5px",
    };
  };
  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <input
          style={this.getCheckStyle()}
          type="checkbox"
          onChange={this.props.markComplete.bind(this, id)}
        />
        {title}
        <button
          style={this.getButtonStyle()}
          type="button"
          onClick={this.props.delete.bind(this, id)}
        >
          X
        </button>
      </div>
    );
  }
}

TodoItems.propTypes = {
  todo: PropTypes.object,
  markComplete: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired,
};
export default TodoItems;
