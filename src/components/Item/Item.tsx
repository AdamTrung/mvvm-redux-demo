import "./Item.css"

import CheckBox from "../Checkbox/Checkbox"
import Button from "../Button/Button"
import { ITodo } from "../../network/Types"

type IItemProps = {
    todo: ITodo,
    toggleStatus: (id: string, value: boolean) => void,
    onDelete: (id: string) => void,
}

const Item = (props : IItemProps) => {

    const titleStyle = {textDecoration: props.todo.isDone ? 'line-through' : "none"}
    
    return(
        <div className="item-container">
            <CheckBox value={props.todo.isDone} onChange={(value:boolean)=> {
                props.toggleStatus(props.todo.id, value)
            }}/>
            <h3 className="item-title" style={titleStyle}>
                {props.todo.title}
            </h3>
            <Button name="delete" onClick={() => props.onDelete(props.todo.id)}/>
        </div>
    )
}


export default Item