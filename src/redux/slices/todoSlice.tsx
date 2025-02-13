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
        addTodoRedux: (state, action) => {
            return { ...state, todoList: [...state.todoList, action.payload] };
        },
        deleteTodoRedux: (state, action) => {
            return { ...state, todoList: state.todoList.filter((task) => (task.id !== action.payload))};
        },
        updateTaskRedux: (state, action) => {
            return {
                ...state, todoList: state.todoList.map((item) => (item.id === action.payload ? { ...item, isDone: !item.isDone } : item))
            };
        }
    },
})

export const { addTodoRedux, deleteTodoRedux, updateTaskRedux } = todoSlice.actions;

export default todoSlice.reducer;