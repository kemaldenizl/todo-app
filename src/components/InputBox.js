import React, {useState} from "react";
import "../styles/inputBox.css"
import { useSelector } from "react-redux";
import axios from "axios";

function InputBox() {

  const [todoContent,setTodoContent] = useState("")
  const [todoDate, setTodoDate] = useState("")

  const url = "http://localhost:3000/todos"

  const todos = useSelector((state) => state.todo.todos) 

  let lastId;
  if(todos[todos.length - 1] === undefined){
    lastId = 0
  }else{
    lastId = todos[todos.length - 1].id + 1
  }

  const handleContentChange = (e) => {
    setTodoContent(e.target.value)
  }
  const handleDateChange = (e) => {
    setTodoDate(e.target.value)
  }

  const postTodos = async () => {
   await axios.post(url,{
      id: lastId,
      content: todoContent,
      date: todoDate
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    postTodos()
    
  }

    return (
    <div className='inputBox' onSubmit={handleSubmit}>
      <form className='inputForm' >
          <input className='todoInput' placeholder="Write a task" value={todoContent} onChange={handleContentChange} />
          <input className='todoDate' type="date" value={todoDate} onChange={handleDateChange} />
          <input type="submit" className='todoButton' />
      </form>
    </div>
    )
}

export default InputBox