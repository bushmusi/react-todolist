import React from "react";
import TodoItem from "./TodoItem";

const TodoList = props =>{
    return (
        <ul>
            {
                props.todos.map( val => (
                    <TodoItem 
                        item={val} 
                        key={val.id}
                        handleChangeProps={props.handleChangeProps}
                        delTodoProps = {props.delTodoProps}
                        setUpdate={props.setUpdate}
                    />
                ))
            }
        </ul>
    );
}

export default TodoList;