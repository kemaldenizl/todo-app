import React from 'react'
import SearchBox from './Todo/SearchBox'
import Todos from './Todo/Todos'
import "../styles/todoScreen.css"

function TodoScreen() {
    return (
      <div className='todoScreen'>
        <div className='todoScreenIn'>
          <SearchBox />
          <Todos />
        </div>
      </div>
    )
  }
  
  export default TodoScreen