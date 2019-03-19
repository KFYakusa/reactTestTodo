import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        content:''
    }
    
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createTodo(this.state);
        this.setState({
            content:''
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="enter task" type="text" onChange={this.handleChange} value={this.state.content}></input>
            </form>
        )
    }
}
export default AddTodo;