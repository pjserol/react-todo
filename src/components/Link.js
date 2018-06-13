import React, {Component} from "react";
import classNames from "classnames";

class Link extends Component {

  render() {
    return (<span className={classNames('filter', {selected: this.props.active})} onClick={this.props.onClick}>{this.props.children}</span>);
  }
}

export default Link;
