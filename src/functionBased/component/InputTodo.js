import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const onChange = (e) => {
    setInputText((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      const { title } = inputText;
      props.addTodoProps(title); //eslint-disable-line
      setInputText({
        title: '',
      });
    } else {
      alert('Please fill input !!! ');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        onChange={onChange}
        value={inputText.title}
        name="title"
        placeholder="Type your task here..."
      />
      <button className="input-submit" type="button">
        <FaPlusCircle />
      </button>
    </form>
  );
};

InputTodo.propType = { addTodoProps: PropTypes.func.isRequired };
export default InputTodo;
