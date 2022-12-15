import React, { useState } from "react";
// import { deleteTodo } from '../../redux/modules/todos';
import { Card } from "../UI/Card";
import "./TodoItem.css";

export const TodoItem = ({
  todo,
  id,
  onDeleteTodo,
  onCheckedTodo,
  onUpdateTodo,
}) => {
  const [updateContent, setUpdateContent] = useState(todo.content);

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

  const todoUpdateHandler = () => {
    onUpdateTodo(todo.id, updateContent);
  };
  const contentChangeHandler = (e) => {
    setUpdateContent(e.target.value);
  };

  return (
    <li>
      <Card className="todo-item">
        <div className="todo-item__desc">
          {todo.edited ? (
            <input
              type="text"
              value={updateContent}
              onChange={contentChangeHandler}
            />
          ) : (
            <h2 className={todo.checked ? "checked" : " "}>{todo.content}</h2>
          )}
        </div>
        {todo.edited ? (
          <button
            className="todo-item__button"
            disabled
            onClick={todoCheckedHandler}
          >
            {todo.checked ? "사실안함" : "다했다"}
          </button>
        ) : (
          <button className="todo-item__button" onClick={todoCheckedHandler}>
            {todo.checked ? "사실안함" : "다했다"}
          </button>
        )}
        <button className="todo-item__button" onClick={todoUpdateHandler}>
          {todo.edited ? "저장" : "수정"}
        </button>
        <button className="todo-item__button" onClick={todoRemoveHandler}>
          삭제
        </button>
      </Card>
    </li>
  );
};
