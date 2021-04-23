import React from "react";
import TextInput from './TextInput';

const TodoItem = (props) => {
  const text = props.text;

  return (
    <li className="active" key={text}>
      <div className="view">
        <input type="checkbox" className="toggle" />
        <label htmlFor="todo">{text}</label>
        <button className="destroy"></button>
      </div>
      <TextInput />
    </li>
  );
};

export default TodoItem;
