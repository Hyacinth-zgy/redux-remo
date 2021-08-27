import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ToDoList from './component/TodoList';
import "antd/dist/antd.css";
import ReactReduxTodolist from './component/ReactReduxTodolist';

// Provider 提供器
import { Provider } from 'react-redux';
import store from './store';


ReactDOM.render(
  <React.StrictMode>
    <ToDoList />
    {/* <ReactReduxTodolist></ReactReduxTodolist> */}
    <Provider store={store}>
      <ReactReduxTodolist></ReactReduxTodolist>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
