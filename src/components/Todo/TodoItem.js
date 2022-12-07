import React from "react";
import { Card } from "../UI/Card";
import "./TodoItem.css";

export const TodoItem = (props) => {
  //todo 삭제
  const todoRemoveHandler = () => {
    if (window.confirm(" 삭제 하시겠습니까? ")) {
      props.setTodos((todos) => todos.filter((todo) => todo.id !== props.id));
    }
  };

  //todo 체크
  const todoCheckedHandler = () => {
    props.setTodos((todos) =>
      todos.map((todo) =>
        todo.id === props.id ? { ...todo, checked: !todo.checked } : todo
      )
    );
    console.log(props.id);
  };
  return (
    <li>
      <Card className="todo-item">
        <div className="todo-item__desc">
          <h2 className={props.checked ? "checked" : " "}>{props.content}</h2>
        </div>
        <button className="todo-item__button" onClick={todoCheckedHandler}>
          완료
        </button>
        <button className="todo-item__button" onClick={todoRemoveHandler}>
          삭제
        </button>
      </Card>
    </li>
  );
};
