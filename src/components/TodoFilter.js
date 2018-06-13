import React, {Component} from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from '../actions';
import "../css/TodoFilter.css";

class TodoFilter extends Component {

  render() {
    console.log("Number item");
    console.log(this.props);
    return (<div className="todo-filter">
      <span>{this.props.numberItemLeft}
        items left
      </span>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </div>);
  }
}

export default TodoFilter;
