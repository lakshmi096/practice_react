import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: ''
    }
    handleOnChange = (e) => {
        this.setState({
            content: e.target.value
        });
    }
    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        });
    }
    render() {
        return (
            <div className="add-todo">
                <form onSubmit={this.handleOnSubmit}>
                    <label htmlFor="name">Add New Todo</label>
                    <input type="text" id="content" onChange={this.handleOnChange} value={this.state.content} />
                </form>
            </div>
        );
    }
}

export default AddTodo;