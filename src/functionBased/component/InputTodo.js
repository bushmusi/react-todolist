import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa"

const InputTodo = props => {
    const [inputText, setInputText] = useState({
        title: ''
    });

    const onChange = e => {
        setInputText( prevState => {
            return {
                ...prevState,
                [e.target.name] : e.target.value
            }
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(inputText.title.trim()) {
            props.addTodoProps(inputText.title);
            setInputText({
                title: ''
            })
        } else {
            alert('Please fill input !!! ')
        }
    }

    return (
        <form onSubmit={handleSubmit} className='form-container'>
            <input 
                type='text'
                className='input-text'
                onChange={onChange}
                value={inputText.title}
                name='title'
                placeholder='Type your task here...'
            />
            <button className="input-submit">
                <FaPlusCircle />
            </button>
        </form>
    )
}

export default InputTodo;