import './App.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoForm from './TodoForm';
import TodoList from './TodoList';
uuidv4();


function App() {
  const [ todos, setTodos ] = useState([]);


  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id )
    })
  }


  return (
    <>
    <TodoForm addTodo={addTodo} />
    <h1>Todo List</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}

export default App
