import { useState } from "react"
import "./AddTodo.css"

type IAddTodoProps = {
    addTodo: (title:string) => void,
}

const AddTodo = (props:IAddTodoProps) => {

    const [todo, setTodo] = useState<string>("")

    return(
        <div className="add-container">
            <input 
                className="add-input" 
                autoCapitalize="sentences"
                value={todo} 
                onInput={e => setTodo(e.target.value)}
            />
            <button 
                onClick={()=>{
                    if (todo.length > 0) {
                        props.addTodo(todo)
                        setTodo("")
                    } else {
                        alert("Enter a todo")
                    }
                }} 
                className="add-button" title="Add"
            >
                <p className="add-title">Add</p>
            </button>
        </div>
    )
}


export default AddTodo