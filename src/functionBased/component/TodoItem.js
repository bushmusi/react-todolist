import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

import styles from './TodoItem.module.css'



const TodoItem = (props) => {

    const [editing, setEditor ] = useState(false);

    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
      }
    
    const trashStyle = {
        color: "orangered", 
        fontSize: "16px"
    }
    const {completed, id, title} = props.item;
    let viewMode = {}
    let editMode = {}
    
    const handleEditing = () => {
        setEditor(!editing);
    }

    if (editing) {
        viewMode.display = "none"
    } else {
       editMode.display = "none"
    }

    const handleUpdateDone =event => {
        if (event.key === "Enter"){
            setEditor(false)
        }
    }

    return (
        <li className={styles.item}>
            <div  onDoubleClick={handleEditing} style={viewMode}>
                <input 
                    type='checkbox' 
                    className={styles.checkbox}
                    checked={completed}
                    onChange={() => props.handleChangeProps(id) }
                />
                <button
                    onClick={() => props.delTodoProps(id)}
                >
                    <FaTrash style={trashStyle}/>
                </button>
                <span style={completed ? completedStyle : null}>
                    {title}
                </span>
            </div>
            <input 
                type='text' 
                style={ editMode} 
                className={styles.textInput}
                value={title}
                onChange={ e => {
                    props.setUpdate(e.target.value, id);
                }}
                onKeyDown={handleUpdateDone} />
        </li>
    )
}

export default TodoItem;