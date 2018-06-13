import React, {Component} from "react"
import TodoItems from "./TodoItems"
import FlipMove from "react-flip-move";
import "../css/TodoList.css"

class TodoList extends Component {

  render() {

    /* before in delete :
    <FlipMove>
      {items}
    </FlipMove>
    */
    
    return (<ul className="todo-list">
      <FlipMove>
        {this.props.items.map(item =>
          <TodoItems key={item.key} item={item} index={item.key} deleteItem={this.props.deleteItem}
            onClick={() => this.props.doneItem(item.key)}/>
        )}
      </FlipMove>
    </ul>);
  }
}

export default TodoList;
