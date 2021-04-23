import React from "react";
import TodoList from "./TodoList";

const TodoApp = (props) => {
  const items = props.todos || [];

  return (
    <div>
      <section className="todoapp">
        <TodoList todos={items} filter={props.filter}/>
      </section>
    </div>
  );
};


export default TodoApp