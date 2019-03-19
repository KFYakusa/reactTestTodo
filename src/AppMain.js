import React, { Component } from 'react';
import './_css/AppMain.css';
import Todos from './Todos';
import AddTodo from './AddTodo';

class AppMain extends Component {
    state = {
        todos: [
            { id: 1, content: 'something' },
            { id: 2, content: 'something else' }
        ]
    }

    createTodo = (todo) =>{
        todo.id = Math.random();
        let todos = [...this.state.todos,todo];
        this.setState({
            todos
        })


    }
    deleteTodo = (id) => {
        console.log(id);
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id;
        });
        this.setState({
            todos
        })
    }
    render() {
        return (
            <main className="center container Appmain" >
                <h1 className=" center blue-text"> TODO's</h1>
                <AddTodo createTodo={this.createTodo}></AddTodo>
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
            </main>
        )
    }
}

export default AppMain;