import ToDoItem from '../item/ToDoItem'
import style from './list.module.css'
import PropTypes from 'prop-types';

const ToDoList = ({todos}) => {
  return (
    <div className={style.list}>
      <p className={style.listTitle}>TO DO</p>
      {todos.map((todo,index) => (
        <ToDoItem key={index} todo={todo} />
      ))}
    </div>
  )
}

ToDoList.propTypes = {
  todos: PropTypes.array.isRequired
};

export default ToDoList