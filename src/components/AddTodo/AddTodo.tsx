import { useState } from "react"
import "./AddTodo.css"

type IAddTodoProps = {
    addTodo: (title:string) => void,
}

const AddTodo = (props:IAddTodoProps) => {

    const [task, setTask] = useState<string>("");

    return(
        <div className="add-container">
            <input 
                className="add-input" 
                autoCapitalize="sentences"
                value={task} 
                onInput={e => setTask(e.target.value)}
            />
            <button 
                onClick={()=>{
                    if (task.length > 0) {
                        props.addTodo(task);
                        setTask("");
                    } else {
                        alert("Enter a todo");
                    }
                }} 
                className="add-button" title="Add"
            >
                <p className="add-title">Add</p>
            </button>
        </div>
    )
}


export default AddTodo;