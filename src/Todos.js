import React from 'react';
import './_css/Todo.css';
const Todos = ({ todos,deleteTodo }) => {
    const TodoList = todos.length ? (
        todos.map(todo => {
            return (
                    <div className="collection-item center container blue todoStyle" key={todo.id} onClick={()=> {deleteTodo(todo.id)}}>
                        <span className="center">{todo.content}</span>
                    </div>
            )
        })
    ) : (
            <p className="center">You have no Todos left</p>
        )
    return (
        <div className="todos collection center">{TodoList}</div>
    )
}

export default Todos;