import React from "react";
// import { deleteTodo } from '../../redux/modules/todos';
import { Card } from "../UI/Card";
import "./TodoItem.css";

export const TodoItem = ({ todo, id, onDeleteTodo, onCheckedTodo }) => {
  //todo 삭제
  const todoRemoveHandler = () => {
    if (window.confirm(" 삭제 하시겠습니까? ")) {
      onDeleteTodo(todo.id);
    }
  };

  //todo 체크
  const todoCheckedHandler = () => {
    onCheckedTodo(todo.id);
  };
  return (
    <li>
      <Card className="todo-item">
        <div className="todo-item__desc">
          <h2 className={todo.checked ? "checked" : " "}>{todo.content}</h2>
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
