import './App.css';
import Header from './Layout/Header';
import Body from './Layout/Body';
import { useState } from 'react';
import {STATUS_CONTENT} from './Config/Constants'
import ClassComponent from './ClassComponent';
import { FuncComponent } from './FuncComponent';
import { useEffect } from 'react';
 
const todoArray = [
  {
    content: 'Dùng create-react-app tạo app',
    status: STATUS_CONTENT.NEW,
  },
  {
    content: 'Tạo Home Page, import vào App.js',
    status: STATUS_CONTENT.DOING,
  },
  {
    content: 'Tạo UI như design trong cái link figma',
    status: STATUS_CONTENT.DONE,
  }
  
]


function App() {
  const [listTodo,setlistTodo] = useState([]);
  const[count,setCount] = useState(1)
  useEffect(() => {
    setlistTodo(todoArray);
    return () => {
        console.log('render lan cuoi');
    }
},[])
  useEffect(() => {
    console.log('update lan ',count);
  },[count])

  // const onCount = () =>{
  //   setCount(count+1);
  // }

//thêm 
  const AddNewToDo = (value) => {
    console.log(value);
    const arrTodo = listTodo;
    arrTodo.unshift({
      content: value.content,
      status: value.status
    });
    if(value.content !== ''){
      setlistTodo([ 
        ...arrTodo,
        // {
        //   content: value.content,
        //   status: value.status
        // },
      ])
    }
    return;
  }
  //sữa 
  const changeStatus = (indexStatus) => {
    console.log('>>> check status'+indexStatus);
    const arrTodo = listTodo;
    arrTodo.splice(indexStatus, 1,{
      content: listTodo[indexStatus].content,
      status: listTodo[indexStatus].status === STATUS_CONTENT.NEW ? STATUS_CONTENT.DOING : STATUS_CONTENT.DONE,
    });
    setlistTodo([...arrTodo])
    
  };
  //xóa
  const deleteItemTodo = (indexStatus) => {
    const arrTodo = listTodo;
    arrTodo.splice(indexStatus, 1)
    setlistTodo([...arrTodo])
  }
  return (
    <div className="App">
      <Header AddNewToDo={AddNewToDo}/>
      <Body todoArray={listTodo} changeStatus={changeStatus} deleteItemTodo={deleteItemTodo}/>
     
      {/* <ClassComponent/>
      <FuncComponent/> */}
    </div>
  );
}

export default App;
