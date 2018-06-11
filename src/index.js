import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './TodoApp';

var destination = document.querySelector("#container")

var items = [];
items.push({key: 1528702302062, text: "learn react", done: false});
items.push({key: 1528702302089, text: "learn Go", done: true});
items.push({key: 1528702302348, text: "blablabla", done: true});

ReactDOM.render(<div>
  <TodoApp initItems={items}/>
</div>, destination);
