const TodoItem = ({id,labelName}) =>{

    return React.createElement('div',{className: 'todo-item'},[
        React.createElement('input', {type: 'checkbox', id:id}),
        React.createElement('label', {htmlFor:id},labelName)
    ])
}
const App = () =>{
    return React.createElement('div', {id: 'my-todo-app'},[
        React.createElement('h1', {},'My to do apps'),
        
        React.createElement(TodoItem, {id:'learn-react1', labelName: 'Learn React1'}),
        React.createElement(TodoItem, {id:'create-app', labelName: 'Create todo app'}),
        React.createElement(TodoItem, {id:'learn', labelName: 'Profit'}),
    ])
}
ReactDOM.render(React.createElement(App), document.getElementById('root'))