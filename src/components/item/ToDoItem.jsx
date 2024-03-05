import { MdOutlineDelete } from "react-icons/md";
import style from './item.module.css';
import PropTypes from 'prop-types';

const ToDoItem = ({todo}) => {
  return (
    <div className={style.item}>
      <p>{todo.task}</p>
      <MdOutlineDelete size={40}/>
    </div>
  )
}

ToDoItem.propTypes = {
  todo: PropTypes.string.isRequired
};

export default ToDoItem