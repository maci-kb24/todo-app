import './App.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
uuidv4();
import ToDoList from './components/list/ToDoList'
import ToDoInput from './components/input/ToDoInput'

function App() {
  const [ todos, setTodos ] = useState([]);

  const addToDo = (todo) => {
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false}]);
    console.log(todos);
  }

  return (
    <div className='app'>
      <p className='app-title'>chores</p>
      <ToDoInput addToDo={addToDo} />
      <ToDoList todos={todos} />
    </div>
  )
}

export default App
