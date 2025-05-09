import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppName from './component/AppName'
import './App.css'
import AddTodoList from './component/AddTodoList'
import TodoItem1 from './component/TodoItem1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <center className="1-todo-list">
      <AppName />
      <AddTodoList />
      <TodoItem1 />
      <div className="container text-center">
        <div className="row mt-30px">
          <div className="col-6">
            Login to google
          </div>
          <div className="col-4">
            31/04/2025
          </div>
          <div className="col-2 display:flex justify-content: space-between;">
            <button type='button' className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </center>
  )
}

export default App;