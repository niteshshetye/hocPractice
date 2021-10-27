import React from 'react'
import './todos.css'

import HOC from '../HOC'

const Todos = ({data}) => {
    const renderData = data.map(todo => {
        return (
            <div key={todo.id} className='todo-conatiner'>
                <h3>
                    Title: {todo.title}
                </h3>
            </div>
        )}
    )
    return (
        <div>
            { renderData }
        </div>
    )
}

const SearchTodos = HOC(Todos, 'todos');

export default SearchTodos;
