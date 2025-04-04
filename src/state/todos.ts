import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type Todo = {
    id: number,
    value: string
}

const initialState: Todo[] = []

const todoStore = createSlice({
    name: 'toods',
    initialState,
    reducers: { 
        AddTodo: (state, action: PayloadAction<Todo>) => {
        state.push(action.payload)
    },
        RemoveTodo: (state, action: PayloadAction<number>) => {
        return state.filter(todo => todo.id !== action.payload)
    }
}
})

export const { AddTodo, RemoveTodo } = todoStore.actions

export default todoStore.reducer