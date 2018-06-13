import React, {Component} from "react";
import { connect } from 'react-redux'
import { addItem } from '../actions'
import "../css/TodoForm.css";

class TodoForm extends Component {

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.refs.itemName.focus();
  }

  onSubmit(event) {
    event.preventDefault();
    var text = this.refs.itemName.value;

    if (text) {
      this.props.dispatch(addItem({text}));
      this.refs.form.reset();
    }
  }

  render() {
    return (<div className="todo-form">
      <form ref="form" onSubmit={this.onSubmit}>
        <input ref="itemName" placeholder="add a new task..."></input>
        <button type="submit">add</button>
      </form>
    </div>);
  }
}

export default connect()(TodoForm);
