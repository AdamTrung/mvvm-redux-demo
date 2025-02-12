import { createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../../network/Types";

type ITodoState = {
    todoList: ITodo[];
}

const initialState : ITodoState = {
    todoList: [],
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            return { ...state, todoList: [...state.todoList, action.payload] };
        }
    },
})

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;