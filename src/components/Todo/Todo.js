import React from "react";
import { TodoList } from "./TodoList";
import { Card } from "../UI/Card";
import "./Todo.css";

export const Todo = ({ todos, onDeleteTodo, onCheckedTodo }) => {
  const filterTodoList = todos.filter((todo) => {
    return todo.deleted === false;
  });

  return (
    <Card className="todo">
      TODO List !
      <TodoList
        filterTodoList={filterTodoList}
        onDeleteTodo={onDeleteTodo}
        onCheckedTodo={onCheckedTodo}
      ></TodoList>
    </Card>
  );
};
