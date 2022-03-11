import React, { useState } from 'react';
import  {STATUS_CONTENT} from '../Config/Constants'

export default function Header({AddNewToDo}) {
  const [headerValue,setheaderValue] = useState({
  title: '',
  status: STATUS_CONTENT.NEW,
})


  const handleAddNewTodo = (e) => {
    console.log(headerValue)
    e.preventDefault();
    AddNewToDo({
      content: headerValue.title,status: headerValue.status
    });
    setheaderValue({
      title: '',
      status: STATUS_CONTENT.NEW,
    });
  }
  const handleOnChange = (e) => {
    setheaderValue({
      ...headerValue,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div className="header">
        <div className="header__title">
            <h2>TO DO LIST APPLICATION</h2>
        </div>
        <form className="header__content">
            <input type="text" placeholder="Add new task in here" className="header__content_input" name="title"
            value={headerValue.title} 
            // onChange={(e) => handleChange(e)}
            onChange={(e) => handleOnChange(e)}
            />
            <select  name="status" value={headerValue.status} 
            // onChange={(e) => handleChangeSelect(e)}
            onChange={(e) => handleOnChange(e)}
            >
              <option value={STATUS_CONTENT.NEW}>New</option>
              <option value={STATUS_CONTENT.DOING}>Doing</option>
              <option value={STATUS_CONTENT.DONE}>Done</option>
            </select>
            <button className="header__content_btn" 
                onClick={(e) => handleAddNewTodo(e)}
                type="submit"
            >+</button>
        </form>
    </div>
  )
}
