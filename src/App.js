import React from 'react'
import './App.css'
// component
import SearchUsers from './components/Users'
import SearchTodos from './components/Todos'
const App = () => {
    return (
        <div className='main-conatainer'>
            <SearchUsers />
            <SearchTodos />
        </div>
    )
}

export default App
