import React from "react";
import { TodoItem } from "./TodoItem";
import "./TodoList.css";

export const TodoList = ({
  filterTodoList,
  onDeleteTodo,
  onCheckedTodo,
  onUpdateTodo,
}) => {
  return (
    <ul className="todo-list">
      {filterTodoList.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onUpdateTodo={onUpdateTodo}
          onDeleteTodo={onDeleteTodo}
          onCheckedTodo={onCheckedTodo}
        />
      ))}
    </ul>
  );
};
