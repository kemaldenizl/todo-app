import React, {useState} from "react";
import "../styles/editTodo.css"
import axios from "axios";

function EditTodo({open,close,todo}){

    const [updateContent,setUpdateContent] = useState(todo.content)
    const [updateDate,setUpdateDate] = useState(todo.date)

    const url = "http://localhost:3000/todos"

    if(!open) return null

    const handleContentChange = e => {
        setUpdateContent(e.target.value)
    }
    const handleDateChange = e => {
        setUpdateDate(e.target.value)
    }

    const updateTodo = async () => {
        await axios.put(url + `/${todo.id}`,{
            id:todo.id,
            content:updateContent,
            date:updateDate
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        updateTodo()
        close()
    }



    return (
        <div className='editTodo'>
            <div className='modal'>
                <div className='modalClose' onClick = {close}>X</div>
                <form onSubmit={handleSubmit} className='editTodoForm'>
                    <label className='editTodoLabel'>Todo Update Screen</label>
                    <input className='editTodoInput' value={updateContent} onChange={handleContentChange} /> 
                    <input className='editTodoDate' value={updateDate} type="date" onChange={handleDateChange} />
                    <input className='editTodoButton' type="submit" value="Change" /> 
                </form>   
            </div>
        </div>
      )
}
export default EditTodo