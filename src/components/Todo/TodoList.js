import React from "react";
import { TodoItem } from "./TodoItem";
import "./TodoList.css";

export const TodoList = (props) => {
  

  return (
    <ul className="todo-list">
      {props.filterTodoList.map((todo) => (
        <TodoItem
          content={todo.content}
          id={todo.id}
          key={todo.id}
          deleted={todo.deleted}
          checked={todo.checked}
          setTodos={props.setTodos}
         
        />
      ))}
    </ul>
  );
};
