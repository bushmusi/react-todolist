import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const [editing, setEditor] = useState(false);

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const trashStyle = {
    color: 'orangered',
    fontSize: '16px',
  };
  const { item } = props;
  const { completed, id, title } = item;
  const viewMode = {};
  const editMode = {};

  const handleEditing = () => {
    setEditor(!editing);
  };

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdateDone = (event) => {
    if (event.key === 'Enter') {
      setEditor(false);
    }
  };

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => props.handleChangeProps(id)} //eslint-disable-line
        />
        <button
          onClick={() => props.delTodoProps(id)} //eslint-disable-line
          type="button"
        >
          <FaTrash style={trashStyle} />
        </button>
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={(e) => {
          props.setUpdate(e.target.value, id); //eslint-disable-line
        }}
        onKeyDown={handleUpdateDone}
      />
    </li>
  );
};
TodoItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  delTodoProps: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,

};
export default TodoItem;
