import "./TodoView.css"

import Header from "../components/Header/Header"
import Item from "../components/Item/Item"
import TodoViewModel from "../viewmodel/TodoViewModel"
import AddTodo from "../components/AddTodo/AddTodo"

const Todo = () => {
    const { list, addTodo, deleteTodo, updateTodo } = TodoViewModel()

    console.log(list);

    return(
        <div className="view-container">
             <Header/>
             <AddTodo
                addTodo={(title : string) => {
                    addTodo(title)
                }}
             />
             {
                list.map((item)=>(
                    <Item 
                        key = {item.id}
                        todo = {item}
                        toggleStatus={updateTodo}
                        onDelete={deleteTodo}
                    />
                ))
            }
        </div>
    )
}


export default Todo