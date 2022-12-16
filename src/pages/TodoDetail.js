import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card } from "../components/UI/Card";
import classes from "./TodoDetail.module.css";

export const TodoDetail = () => {
  const todos = useSelector((state) => state.todos);
  const params = useParams();

  const selectedTodo = todos.filter((todo) => {
    return todo.id === params.id;
  });
  console.log(selectedTodo);

  // 네비게이터 명시
  const navigate = useNavigate();

  //   뒤로가기
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className={classes.inner} onClick={goBack}></div>
      <Card className={classes["todo-modal"]}>
        <header className={classes.header}>
          <h1>상세페이지</h1>
        </header>
        <div className={classes["todo-modal__desc"]}>
          <h2>{selectedTodo[0].content}</h2>
        </div>
        <footer className={classes.actions}>
          <button className={classes.button} onClick={goBack}>
            확인
          </button>
        </footer>
      </Card>
    </>
  );
};
