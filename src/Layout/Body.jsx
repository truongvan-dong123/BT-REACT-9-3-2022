import React from 'react'
import TodoItem from '../components/TodoItem'

export default function Header({todoArray,changeStatus,deleteItemTodo}) {
    
    const renderTodoArray = () => {
        return todoArray.map((todoItem,index) =>{
            return (
                // <TodoItem key={index} content={todoItem.content} isDone={todoItem.isDone}/>
                <TodoItem key={index} {...todoItem}  changeStatus={() => changeStatus(index)} deleteItemTodo={() => deleteItemTodo(index)}/>
            )
        })
    }
  return (
    <div className="body">
        {
           renderTodoArray()
        }
    </div>
  )
}
