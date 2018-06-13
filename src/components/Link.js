import React, { Component } from "react";
import classNames from "classnames";
import "../css/TodoFilter.css";

// TODO : modifier file css

class Link extends Component {

  render() {
    return (
      <span className={classNames('filter', {selected: this.props.active})}
        onClick={this.props.onClick}>{this.props.children}</span>
    );
  }
}

export default Link;
