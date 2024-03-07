import TodoItem from "./TodoItem";

import PropTypes from 'prop-types';

export default function TodoList({todos, toggleTodo, deleteTodo}) {
  return (
    <ul className="list">
      {todos.length === 0 && <li>No items to display</li>}
      {todos.map(todo => { 
        return (
        <TodoItem 
        key={todo.id} 
        {...todo} 
        toggleTodo={toggleTodo} 
        deleteTodo={deleteTodo} />
      )
       })}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}