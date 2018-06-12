import React, {Component} from "react";
import classNames from "classnames";
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
    //   <span className={cx(filter, this.props.isAll selected)} onClick={() => this.onClickAllChange()}>All</span>
    return (<div className="todo-filter">
      <span>{this.props.numberItemLeft} items left </span>
      <span className={classNames('filter', {selected: this.props.isAll})} onClick={() => this.onClickAllChange()}>All</span>
      <span className={classNames('filter', {selected: this.props.isActive})} onClick={() => this.onClickActiveChange()}>Active</span>
      <span className={classNames('filter', {selected: this.props.isCompleted})} onClick={() => this.onClickCompletedChange()}>Completed</span>
    </div>);
  }
}

export default TodoFilter;
