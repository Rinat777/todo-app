import React from "react";
import ReactDOM from "react-dom";
import TodoItem from "./TodoItem";

const App = () =>{
    return React.createElement('div', {id: 'my-todo-app'},[
        React.createElement('h1', {},'My to do apps'),
        
        React.createElement(TodoItem, {id:'learn-react1', labelName: 'Learn React1'}),
        React.createElement(TodoItem, {id:'create-app', labelName: 'Create todo app'}),
        React.createElement(TodoItem, {id:'learn', labelName: 'Profit'}),
    ])
}
ReactDOM.render(React.createElement(App), document.getElementById('root'))