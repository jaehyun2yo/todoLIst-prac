import React from "react";
import { TodoList } from "./TodoList";
import { Card } from "../UI/Card";
import "./Todo.css";

export const Todo = ({ todos, onDeleteTodo, onCheckedTodo, onUpdateTodo }) => {
  const filterTodoList = todos.filter((todo) => {
    return todo.deleted === false;
  });

  return (
    <Card className="todo">
      할일
      <TodoList
        filterTodoList={filterTodoList}
        onDeleteTodo={onDeleteTodo}
        onCheckedTodo={onCheckedTodo}
        onUpdateTodo={onUpdateTodo}
      ></TodoList>
    </Card>
  );
};
