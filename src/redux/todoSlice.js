import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos : [],
    filtredTodo : ""
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodos : (state,action) => {
            state.todos = action.payload
        },
        searchTodo: (state,action) => {
            state.filtredTodo = action.payload
        }
    }
    }
)

export const { addTodos,searchTodo } = todoSlice.actions

export default todoSlice.reducer