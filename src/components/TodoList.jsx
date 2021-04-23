import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const items = (props.todos || []).filter(
    (item) => item.get("status") === props.filter || props.filter === "all"
  );

  const isCompleted = (item) => {
    return item.get("status") === "completed";
  };

  return (
    <section className="main">
      <ul className="todo-list">
        {items.map((item) => (
          <TodoItem
            key={item.get("text")}
            text={item.get("text")}
            id={item.get('id')}
            isCompleted={isCompleted(item)}
            isEditing={item.get("editing")}
            toggleComplete={props.toggleComplete}
            deleteItem={props.deleteItem}
            editItem={props.editItem}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
