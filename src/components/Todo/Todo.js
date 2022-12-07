import React from "react";
import { TodoList } from "./TodoList";
import { Card } from "../UI/Card";
import "./Todo.css";

export const Todo = (props) => {

  const filterTodoList = props.items.filter((todo) => {
    return todo.deleted === false;
  });

  return (
    <Card className="todo">
      TODO List !
      <TodoList
        filterTodoList={filterTodoList}
        setTodos={props.setTodos}
  
      ></TodoList>
    </Card>
  );
};
