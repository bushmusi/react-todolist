import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = (props) => (
  <ul>
    {
                props.todos.map((val) => ( //eslint-disable-line
                  <TodoItem
                    item={val}
                    key={val.id}
                    handleChangeProps={props.handleChangeProps} //eslint-disable-line
                    delTodoProps={props.delTodoProps} //eslint-disable-line
                    setUpdate={props.setUpdate} //eslint-disable-line
                  />
                ))
            }
  </ul>
);
TodoList.propTypes = {
  todos: PropTypes.array.isRequired,//eslint-disable-line
  handleChangeProps: PropTypes.func.isRequired,
  delTodoProps: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,

};
export default TodoList;
