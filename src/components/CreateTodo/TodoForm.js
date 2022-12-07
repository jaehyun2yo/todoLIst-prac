import React, { useState } from "react";
import "./TodoForm.css";

export const TodoForm = (props) => {
  const [createTodo, setCreateTodo] = useState("");

  const todoChangeHandler = (e) => {
    setCreateTodo(e.target.value);
  };

  // form 데이터 저장
  const submitHandler = (e) => {
    e.preventDefault();

    const todoDate = {
      id: Math.random().toString(),
      content: createTodo,
      checked: false,
      deleted: false,
    };

    props.onSaveTodoData(todoDate);

    setCreateTodo("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="create-todo__control">
        <label htmlFor="">해야할 일</label>
        <input type="text" value={createTodo} onChange={todoChangeHandler} />
      </div>
      <div className="create-todo__actions">
        <button type="button" onClick={props.onCancel}>
          취소
        </button>
        <button type="submit">저장</button>
      </div>
    </form>
  );
};
