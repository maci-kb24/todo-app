import style from './input.module.css';
import { IoIosAddCircle } from "react-icons/io";
import { useState } from 'react';
import PropTypes from 'prop-types';

const ToDoInput = ({ addToDo }) => {

  const [placeholder, setPlaceholder] = useState('Add Item');
  const [input, setInput] = useState([]);

  const handleFocus = () => {
    setPlaceholder('');
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addToDo(input);
    setInput('');
  }

  return (
    <div className="search">
        <form onSubmit={handleSubmit}>
            <div className={style.inputContainer}>
                <input type="text" value={input} placeholder={placeholder} className={style.input} onFocus={handleFocus} onChange={handleChange} />
                <button className={style.button} type="submit"><IoIosAddCircle size={40} className={style.addIcon} /></button>
            </div>
        </form>
    </div>
  )
}

export default ToDoInput

ToDoInput.propTypes = {
  addToDo: PropTypes.func.isRequired,
};