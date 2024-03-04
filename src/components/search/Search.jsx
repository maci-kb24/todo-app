import style from './search.module.css';
import { IoIosAddCircle } from "react-icons/io";
import { useState } from 'react';

const Search = () => {
  const [placeholder, setPlaceholder] = useState('Add Item');

  const handleFocus = () => {
    setPlaceholder('');
  };

  return (
    <div className="search">
        <form>
            <div className={style.inputContainer}>
                <input type="text" placeholder={placeholder} className={style.input} onFocus={handleFocus} />
                <button className={style.button} type="submit"><IoIosAddCircle size={40} className={style.addIcon} /></button>
            </div>
        </form>
    </div>
  )
}

export default Search