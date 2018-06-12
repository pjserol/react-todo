import React, {Component} from "react";
import TodoHeader from "./TodoHeader";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";


class TodoApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: this.props.initItems,
      filterAll: true,
      filterActive: false,
      filterCompleted: false
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.markItemDone = this.markItemDone.bind(this);
    this.handleFilterAllChange = this.handleFilterAllChange.bind(this);
    this.handleFilterActiveChange = this.handleFilterActiveChange.bind(this);
    this.handleFilterCompletedChange = this.handleFilterCompletedChange.bind(this);
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

  handleNumberItemChange() {
    return 2;
  }

  handleFilterAllChange(filterAll) {
    this.setState({
      filterAll: filterAll,
      filterActive: false,
      filterCompleted: false
    });
  }

  handleFilterActiveChange(filterActive) {
    this.setState({
      filterAll: false,
      filterActive: filterActive,
      filterCompleted: false
    });
  }

  handleFilterCompletedChange(filterCompleted) {
    this.setState({
      filterAll: false,
      filterActive: false,
      filterCompleted: filterCompleted
    });
  }

  render() {
    var numberItemLeft = this.state.items.reduce(function (accum, item) {
    				return item.done ? accum : accum + 1;
    			}, 0);

    return (<div>
      <TodoHeader/>
      <TodoForm addItem={this.addItem}/>
      <TodoList items={this.state.items}
        deleteItem={this.deleteItem}
        markItemDone={this.markItemDone}
        filterAll={this.state.filterAll}
        filterActive={this.state.filterActive}
        filterCompleted={this.state.filterCompleted}/>
      <TodoFilter numberItemLeft={numberItemLeft}
        isAll={this.state.filterAll}
        isActive={this.state.filterActive}
        isCompleted={this.state.filterCompleted}
        onFilterAllChange={this.handleFilterAllChange}
        onFilterActiveChange={this.handleFilterActiveChange}
        onFilterCompletedChange={this.handleFilterCompletedChange}/>
    </div>)
  }
}

export default TodoApp;
