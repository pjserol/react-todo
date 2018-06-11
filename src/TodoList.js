import React, {Component} from "react"
import TodoItems from "./TodoItems"
import FlipMove from "react-flip-move";
import "./TodoList.css"

class TodoList extends Component {

  render() {
    var items = this.props.items.map((item) => {
      return (<TodoItems key={item.key} item={item} index={item.key} deleteItem={this.props.deleteItem} markItemDone={this.props.markItemDone}/>);
    });

    return (<ul className="todo-list">
      <FlipMove>
        {items}
      </FlipMove>
    </ul>);
  }
}

export default TodoList;
