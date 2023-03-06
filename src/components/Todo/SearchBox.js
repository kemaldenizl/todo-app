import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import "../../styles/todo/searchBox.css"
import { useDispatch } from 'react-redux'
import { searchTodo } from '../../redux/todoSlice'

function SearchBox() {

const dispatch = useDispatch()

    return (
      <div className='searchBox'>
          <input className='searchInput' placeholder='Search task' onChange={(e) => dispatch(searchTodo(e.target.value))} />
          <AiOutlineSearch className='searchIcon' size={32}/>
      </div>
    )
  }
  
  export default SearchBox