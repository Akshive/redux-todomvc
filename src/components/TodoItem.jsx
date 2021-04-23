import React from "react";
import classNames from "classnames";
import TextInput from "./TextInput";

const TodoItem = (props) => {
  const text = props.text;
  let itemClass = classNames({
    todo: true,
    completed: props.isCompleted,
    editing: props.isEditing,
  });

  return (
    <li className={itemClass} key={text}>
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          defaultChecked={props.isCompleted}
          onClick={() => props.toggleComplete(props.id)}
        />
        <label htmlFor="todo" onDoubleClick={() => props.editItem(props.id)}>
          {text}
        </label>
        <button
          className="destroy"
          onClick={() => props.deleteItem(props.id)}
        ></button>
      </div>
      <TextInput />
    </li>
  );
};

export default TodoItem;
