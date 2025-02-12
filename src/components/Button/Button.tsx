import "./Button.css"

import deleteIcon from "../../assets/delete.svg"
import editIcon from "../../assets/edit.svg"

const Button = ({onClick=()=>{}, name="edit"}) => {
   
    return(
        <button className="button-container" onClick={onClick}>
           <img src={(name == "delete") ? deleteIcon : ((name == "edit") ? editIcon : "")}/>
        </button>
    )
}

export default Button