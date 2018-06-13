import React, {Component} from "react";
import TodoHeader from "./TodoHeader";
import TodoForm from "./TodoForm";
/*import TodoList from "./TodoList";*/
import VisibleTodoList from '../containers/VisibleTodoList';
import TodoFilter from "./TodoFilter";


class TodoApp extends Component {

  render() {
    /*var numberItemLeft = this.state.items.reduce(function(accum, item) {
      return item.done
        ? accum
        : accum + 1;
    }, 0);*/

    return (<div>
      <TodoHeader/>
      <TodoForm/>
      <VisibleTodoList/>
      <TodoFilter/>
    </div>)
  }
}

export default TodoApp;
