import { useEffect, useState } from "react"
import uuid from "../utils/uuid"
import { getTodo, setTodo } from "../model/TodoModel"
import { ITodo } from "../network/Types"

const TodoViewModel = () => {
    const [list, setList] = useState<Array<ITodo>>([])

    useEffect(()=> {
        loadData()
    },[])

    const loadData = () => {
        setList(getTodo())
    }

    const addTodo = (title:string) => {

        let item = {
            id: uuid(),
            title: title,
            isDone: false
        }
        const data = [item, ...list]
        setList(data)
        setTodo(data)
    }

    const deleteTodo = (id:string) => {
        const data = list.filter((todo: ITodo) => todo.id !== id)
        setList(data)
        setTodo(data)
    }

    const updateTodo = (id: string, value: boolean) => {
        let updatedList = list.map((el: ITodo) => (el.id === id ? {...el, isDone: value} : el))
        sortList(updatedList)
    }

    const sortList = (updatedList: Array<ITodo>) => {
        const sortedList = updatedList.sort((a, b) => (!b.isDone ? 1 : -1))
        setList(sortedList)
        setTodo(sortedList)
    }

    return {
        list: list,
        addTodo: addTodo,
        deleteTodo: deleteTodo,
        updateTodo: updateTodo
    }
}

export default TodoViewModel