import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      { id: Math.random(), content: "Wash the dishes", status: "TODO" },
      { id: Math.random(), content: "Start a project", status: "TODO" }
    ]
  }
  markTodoDone = (id) => {
    let newTodos = this.state.todos.filter((todo) => {
      if (todo.id === id) {
        todo.status = "DONE";
        return true;
      } else {
        return true;
      }
    })
    this.setState({
      todos: newTodos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    todo.status = "TODO";
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    });
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text text-darken-2">My ToDo's</h1>
        {/*Component to render todo list*/}
        <Todos todos={this.state.todos} markTodoDone={this.markTodoDone} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default App;
