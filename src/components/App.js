import React, {Component} from "react";
import Header from "./Header";
import TodoForm from "../containers/TodoForm";
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from "./Footer";


class App extends Component {

  render() {

    return (<div>
      <Header/>
      <TodoForm/>
      <VisibleTodoList/>
      <Footer/>
    </div>)
  }
}

export default App;
