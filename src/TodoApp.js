import React, {Component} from "react";
import TodoHeader from "./TodoHeader";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";


class TodoApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: this.props.initItems
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.markItemDone = this.markItemDone.bind(this);
  }

  addItem(item) {

    if (item !== "") {
      var newItem = {
        key: Date.now(),
        text: item.newItemValue,
        done: false
      };

      this.setState((prevState) => {
        return {items: prevState.items.concat(newItem)};
      });


    }
    console.log(this.state.items);
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(item => {
      return (item.key !== key)
    });

    this.setState({items: filteredItems});
  }

  markItemDone(key) {

    var item = this.state.items.find((item) => {
      return item.key === key;
    });

    var done = !item.done;

    this.setState({
      items: this.state.items.map(item => {
        if (item.key !== key)
          return item;
        return {
          ...item,
          done: done
        };
      })
    });
  }

  render() {

    return (<div>
      <TodoHeader/>
      <TodoForm addItem={this.addItem}/>
      <TodoList items={this.state.items} deleteItem={this.deleteItem} markItemDone={this.markItemDone}/>
    </div>)
  }
}

export default TodoApp;
