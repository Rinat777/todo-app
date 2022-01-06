import React from "react";
import ReactDOM from "react-dom";
import TodoItem from "./TodoItem";

// const App = () =>{
//     return React.createElement('div', {id: 'my-todo-app'},[
//         React.createElement('h1', {},'My to do apps'),
        
//         React.createElement(TodoItem, {id:'learn-react1', labelName: 'Learn React1'}),
//         React.createElement(TodoItem, {id:'create-app', labelName: 'Create todo app'}),
//         React.createElement(TodoItem, {id:'learn', labelName: 'Profit'}),
//     ])
// }
const out=[
    {id:'learn-react1', labelName: 'Learn React1'},
    {id:'create-app', labelName: 'Create todo app'},
    {id:'learn', labelName: 'Profit'}
]
const App = ()=>(
     <div id= 'my-todo-app' className="my-todo-app">
     <h1>My to do app</h1>
     {out.map((x)=><TodoItem key={x.id} id={x.id} labelName= {x.labelName}/>)}
    
     </div>
)
// ReactDOM.render(React.createElement(App), document.getElementById('root'))
ReactDOM.render(<App/>,document.getElementById("root"))