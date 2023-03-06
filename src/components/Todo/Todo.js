import axios from "axios";
import React, { useState } from "react";
import { BsFillPencilFill } from "react-icons/bs"
import { BsXLg } from "react-icons/bs"
import "../../styles/todo/todo.css"
import EditTodo from "../EditTodo"

function Todo({todo}){

const [openModal,setOpenModal] = useState(false)
const handleEdit = () => {
    setOpenModal(true)
 }
 
const url = "http://localhost:3000/todos"

const handleDelete = async () => {
  await axios.delete(url + `/${todo.id}`)
}

    return (
        <div className="todo">
            <h3 className='todoContent'>{todo.content}</h3>
            <h3 className='todoContentDate'>{todo.date}</h3>
            <div className='todoIcons'>
            <BsFillPencilFill className='icon iconPencil' onClick={() => {handleEdit()}} />
            <EditTodo todo={todo} open={openModal} close={() => setOpenModal(false)}  />
            <BsXLg className='icon iconX' onClick={() => handleDelete()}  />
            </div>
            
        </div>
      )
    }
    
    export default Todo
