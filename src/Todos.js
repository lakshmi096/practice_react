import React from 'react';

const Todos = ({ todos, markTodoDone }) => {
    const todo_list = todos.length === 0 ? (
        <h5 className="center-align">This should be center aligned</h5>
    ) : (
            todos.map((todo) => {

                return (
                    <a href="#!" className="collection-item" key={todo.id}>
                        {todo.content}
                        <span className={`black-text ${todo.status === 'TODO' ? "badge grey" : "badge green"}`} onClick={() => { markTodoDone(todo.id) }}>
                            {todo.status}
                        </span>
                    </a>

                )
            })
        )
    return (
        <div className="todos collection">
            {todo_list}
        </div>
    )
}

export default Todos;