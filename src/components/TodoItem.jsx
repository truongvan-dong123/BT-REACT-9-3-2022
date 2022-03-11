import React, { useEffect, useState } from 'react'
import '../App.css'
import { STATUS_CONTENT } from '../Config/Constants';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';



export default function TodoItem({ content, status, changeStatus, deleteItemTodo }) {
  const [valueFirst, setValueFirst] = useState({
    content: '',
    status: '',
  })
  useEffect(() => {
    setValueFirst({
      content: content,
      status: status,
    })
  }, [status, content])

  const changeStyleStatus = () => {
    switch (valueFirst.status) {
      case STATUS_CONTENT.DOING:
        return {
          color: 'green',
        }
      case STATUS_CONTENT.NEW:
        return {
          color: 'black',
        }
      case STATUS_CONTENT.DONE:
        return {
          color: 'blue',
        }
      default:
        return {
          color: 'black',
        };
    }
  }

  return (
    <div className="todoItem">
      <div className="todoItem__content">
        {
          valueFirst.content.length < 50 ?
            <p style={changeStyleStatus()}>{valueFirst.content}</p>
            :
            <p style={changeStyleStatus()}>...</p>
        }
      </div>
      <div className="todoItem__button">
        {
          valueFirst.status === STATUS_CONTENT.NEW ? <DoneIcon className="todoItem__button--V" /> : null
        }
        <button onClick={changeStatus}>
          {valueFirst.status}
        </button>
        {/* {!isDone &&
            <button className="todoItem__button--green">isDone</button>} */}
        {/* <button className="todoItem__button--black" onClick={clearItemTodo}>Clear</button> */}
        <CloseIcon className="todoItem__button--X" onClick={deleteItemTodo} />
      </div>
    </div>
  )
}
