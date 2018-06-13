import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import './css/index.css';
import App from './components/App';

var destination = document.querySelector("#container");

const store = createStore(rootReducer,
/* preloadedState, */
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}>
  <App/>
</Provider>, destination);
