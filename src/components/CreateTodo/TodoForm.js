import React, { useState } from "react";

import "./TodoForm.css";

export const TodoForm = ({ onCancel, onCreate }) => {
  const [createTodo, setCreateTodo] = useState("");

  const todoChangeHandler = (e) => {
    setCreateTodo(e.target.value);
  };
  // form 데이터 저장
  const submitHandler = (e) => {
    e.preventDefault();
    // 입력값이 없다면 alert
    if (!createTodo) {
      alert(" 할일을 입력해주세요.");
      return;
    }
    // 액션함수를 통해 값 전달
    onCreate(createTodo);
    setCreateTodo("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="create-todo__control">
        <label htmlFor="">해야할 일</label>
        <input type="text" value={createTodo} onChange={todoChangeHandler} />
      </div>
      <div className="create-todo__actions">
        <button type="button" onClick={onCancel}>
          취소
        </button>
        <button type="submit">저장</button>
      </div>
    </form>
  );
};
