import React from "react";
import TodoList from "./TodoList";
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators'

const TodoApp = (props) => {
  const items = props.todos || [];

  return (
    <div>
      <section className="todoapp">
        <TodoList {...props}/>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.get('todos'),
    filter: state.get('filter')
  }
}

export const TodoAppContainer = connect(mapStateToProps, actionCreators)(TodoApp);