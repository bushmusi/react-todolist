import React from "react";

function TodoItem(props) {
    return (
        <li>
            <input 
                type='checkbox' 
                checked={props.item.completed}
                onChange={() => props.handleChangeProps(props.item.id) }
            />
            {props.item.title}
            <button
                onClick={() => props.delTodoProps(props.item.id)}
            >
                Delete
            </button>
        </li>
    )
}

export default TodoItem;