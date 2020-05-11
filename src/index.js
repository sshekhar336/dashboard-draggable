import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  boardName: 'Web design'
}

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_BOARD_NAME_ACTION":
      return {
        ...state,
        boardName: action.payload
      }
    default:
      return state
  }
}

const store = createStore(boardReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
