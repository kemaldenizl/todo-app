import React,{useEffect} from 'react'
import Todo from './Todo'
import "../../styles/todo/todos.css"
import { useDispatch, useSelector } from 'react-redux'
import { addTodos } from '../../redux/todoSlice'
import axios from 'axios'


function Todos() {

const dispatch = useDispatch()
const url = "http://localhost:3000/todos"
const todos = useSelector((state) => state.todo.todos)
const filtredTodo = useSelector((state) => state.todo.filtredTodo)

const getTodos = async () => {
  const response = await axios.get(url)
  dispatch(addTodos(response.data))
}

useEffect(() => {getTodos()},[todos])

    return (
        <div className='todos'>
          {
            todos.filter((todo) => {
              if(filtredTodo === ""){
                return todo.content
              }else if(todo.content.toLocaleLowerCase().includes(filtredTodo.toLocaleLowerCase())){
                return todo.content
              }
            }).map((todo) => (
              <Todo todo={todo} key={todo.id} />
            ))
          }
        </div>
      )
}
export default Todos