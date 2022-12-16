import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  // 네비게이터 명시
  const navigate = useNavigate();

  // 상세페이지로 이동
  const goTodoDetail = () => {
    if (todo.edited) {
      return;
    }
    console.log("눌렀다");
    navigate(`/todo/${todo.id}`);
  };

  //todo 삭제
  const todoRemoveHandler = (e) => {
    e.stopPropagation();
    if (window.confirm(" 삭제 하시겠습니까? ")) {
      onDeleteTodo(todo.id);
    }
  };

  //todo 체크
  const todoCheckedHandler = (e) => {
    e.stopPropagation();
    onCheckedTodo(todo.id);
  };

  const todoUpdateHandler = (e) => {
    e.stopPropagation();
    onUpdateTodo(todo.id, updateContent);
  };
  const contentChangeHandler = (e) => {
    e.stopPropagation();
    setUpdateContent(e.target.value);
  };

  return (
    <li>
      <div className="inner" onClick={goTodoDetail}>
        <Card className="todo-item">
          <div className="todo-item__desc">
            {todo.edited ? (
              <input
                type="text"
                value={updateContent}
                onChange={contentChangeHandler}
                onClick={(e) => e.stopPropagation()}
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
      </div>
    </li>
  );
};
