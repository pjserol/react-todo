import React, {Component} from "react";
import "./TodoFilter.css";

class TodoFilter extends Component {
  constructor(props) {
    super(props);

    this.onClickAllChange = this.onClickAllChange.bind(this);
    this.onClickActiveChange = this.onClickActiveChange.bind(this);
    this.onClickCompletedChange = this.onClickCompletedChange.bind(this);
  }

  onClickAllChange() {
    this.props.onFilterAllChange(true);
  }

  onClickActiveChange() {
    this.props.onFilterActiveChange(true);
  }

  onClickCompletedChange() {
    this.props.onFilterCompletedChange(true);
  }

  render() {
    return (<div className="todo-filter">
      <span>.. item left </span>
      <span className="filter" onClick={() => this.onClickAllChange()}>All</span>
      <span className="filter" onClick={() => this.onClickActiveChange()}>Active</span>
      <span className="filter" onClick={() => this.onClickCompletedChange()}>Completed</span>
    </div>);
  }
}

export default TodoFilter;
