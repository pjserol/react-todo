import React, {Component} from "react"
import TodoItems from "./TodoItems"
import FlipMove from "react-flip-move";
import "./TodoList.css"

class TodoList extends Component {

  render() {
    const filterAll = this.props.filterAll;
    const filterActive = this.props.filterActive;
    const filterCompleted = this.props.filterCompleted;

    const items = [];
    console.log("test :");
    console.log(filterAll);
    console.log(this.props.items);

    this.props.items.forEach((item) => {
      if(filterAll || !(item.done == filterActive) || (item.done == filterCompleted)) {
        items.push(
          <TodoItems key={item.key} item={item} index={item.key} deleteItem={this.props.deleteItem} markItemDone={this.props.markItemDone}/>
        );
      }
    });

    return (<ul className="todo-list">
      <FlipMove>
        {items}
      </FlipMove>
    </ul>);
  }
}

export default TodoList;
