import React, { Component } from "react";
import PropTypes from "prop-types";

import "../assets/css/TodoItem.css";

class TodoItem extends Component {
  //styling css inline
  // getStyle = () => {
  //   return {
  //     display: "flex",
  //     justifyContent: "space-between",
  //     padding: "1rem 0.5rem",
  //     borderBottom: "1px #ccc dotted",
  //     backgroundColor: "#f4f4f4f4",
  //     textDecoration: this.props.todo.completed ? "line-through" : "none"
  //   };
  // };

  state = {
    isChecked: false
  };

  handleClick = () => {
    this.setState(state => ({
      isChecked: !state.isChecked
    }));
  };

  render() {
    console.log(this.state.isChecked);
    const { id, title } = this.props.todo;

    return (
      <div className={this.state.isChecked ? "style" : "unstyle"}>
        <div>
          <input
            onClick={this.handleClick}
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />
          {"  "}
          {title}
        </div>
        <button
          onClick={this.props.delTodo.bind(this, id)}
          className="btn btn-delete"
        >
          <i className="fa fa-trash"></i>
        </button>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default TodoItem;
