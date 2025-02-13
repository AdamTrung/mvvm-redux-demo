import { useState } from "react"
import { store } from "../redux/store/store"
import { addTodoRedux, deleteTodoRedux, updateTaskRedux } from "../redux/slices/todoSlice"
import { updateId } from "../redux/slices/idSlice"

const TodoViewModel = () => {
    const [onChange, setOnChange] = useState<boolean>(false);

    const addTodo = (title:string) => {
        let item = {
            id: store.getState().ids.id,
            title: title,
            isDone: false
        }
        store.dispatch(addTodoRedux(item));
        store.dispatch(updateId());
        setOnChange(!onChange);
    }

    const deleteTodo = (id:string) => {
        store.dispatch(deleteTodoRedux(id));
        setOnChange(!onChange);
    }

    const updateTodo = (id: string) => {
        store.dispatch(updateTaskRedux(id));
        setOnChange(!onChange);
    }

    return {
        list: store.getState().todos.todoList,
        addTodo: addTodo,
        deleteTodo: deleteTodo,
        updateTodo: updateTodo,
    }
}

export default TodoViewModel;