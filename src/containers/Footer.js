import React, {Component} from "react";
import {connect} from 'react-redux';
import FilterLink from "../containers/FilterLink";
import {VisibilityFilters} from '../actions';
import "../css/Footer.css";

class Footer extends Component {

  render() {
    return (<div className="footer">
      <span>{this.props.numberItemLeft} items left</span>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </div>);
  }
}

export default connect(function(state) {
  var numberItemLeft = state.items.reduce(function(accum, item) {
    return item.done
      ? accum
      : accum + 1;
  }, 0);

  return {numberItemLeft: numberItemLeft}
})(Footer);
