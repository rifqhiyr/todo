import React, { Component } from "react";
import PropTypes from "prop-types";

import "../../src/assets/css/AddTodo.css";

export class AddTodo extends Component {
  state = {
    title: ""
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.AddTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form-add">
          <input
            className="btn input-form"
            type="text"
            name="title"
            placeholder="add your todolist..."
            value={this.state.title}
            onChange={this.handleInput}
          />
          <input className="btn btn-submit" type="submit" value="Add Todo" />
        </form>
      </div>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddTodo;
