import React, {Component} from "react"
import TodoItems from "../containers/TodoItems"
import FlipMove from "react-flip-move";
import "../css/TodoList.css"

class TodoList extends Component {

  render() {
    return (<ul className="todo-list">
      <FlipMove>
        {this.props.items.map(item =>
          <TodoItems key={item.key} item={item} index={item.key}/>
        )}
      </FlipMove>
    </ul>);
  }
}

export default TodoList;
