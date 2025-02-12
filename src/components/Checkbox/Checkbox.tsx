import "./CheckBox.css"

type ICheckboxProps = {
    value: Boolean,
    onChange: (value:boolean) => void,
}

const CheckBox = (props : ICheckboxProps) => {

    return(
        <div className="checkbox-container" 
            onClick={()=>{
                    props.onChange(!props.value)
                }
            }
        >
            <div className="checkbox-dot"
                style={{
                    opacity: props.value ? "1" : "0",
                    transition: "all .2s",
                    visibility: props.value ? "visible" : "hidden"
                }}
            />
        </div>
    )
}


export default CheckBox;