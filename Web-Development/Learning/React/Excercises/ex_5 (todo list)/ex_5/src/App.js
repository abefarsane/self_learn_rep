import React from 'react'
import TodoItem from './components/TodoItem'
import NavBar from './components/NavBar'
import './App.css'

function App(){
    return (
        <div>
            <NavBar />
            <div className='todo-list'>
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </div>
    )
}


export default App