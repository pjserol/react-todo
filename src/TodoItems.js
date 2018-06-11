import React, {Component} from "react";
import {Glyphicon} from 'react-bootstrap';
import "./TodoItems.css"

class TodoItems extends Component {

  constructor(props) {
    super(props);
    this.onClickDelete = this.onClickDelete.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
  }

  onClickDelete(key) {
    this.props.deleteItem(key);
  }

  onClickDone(key) {
    this.props.markItemDone(key);
  }

  render() {

    var todoClass = this.props.item.done
      ? "done"
      : "undone";

    return (<li>
      <div className={todoClass}>
        <Glyphicon glyph="ok" onClick={() => this.onClickDone(this.props.index)}/> {this.props.item.text}
        <span className="close" onClick={() => this.onClickDelete(this.props.index)}>
          &times;</span>
      </div>
    </li>);
  }
};

export default TodoItems;
