import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddTodo extends Component {
  state = {
    title: "",
  };
  handle = (e) => this.setState({ [e.target.name]: e.target.value });
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };
  render() {
    return (
      <form style={{ display: "flex" }} onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo ..."
          style={{ flex: 10, padding: "5px" }}
          value={this.state.title}
          onChange={this.handle}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: 1 }}
        ></input>
      </form>
    );
  }
}
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
export default AddTodo;
