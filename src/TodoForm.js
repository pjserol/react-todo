import React, {Component} from "react";
import "./TodoForm.css";

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
    var newItemValue = this.refs.itemName.value;

    if (newItemValue) {
      this.props.addItem({newItemValue});
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

export default TodoForm;
