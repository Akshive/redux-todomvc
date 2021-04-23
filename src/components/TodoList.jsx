import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const items = props.todos || [];

  return (
    <section className="main">
      <ul className="todo-list">
        {items.map((item) => (
          <TodoItem key={item.get('text')} text={item.get('text')} />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
