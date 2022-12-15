import React from "react";
import CreateTodoContainer from "../components/CreateTodo/CreateTodoContainer";
import TodosContainer from "../components/Todo/TodosContainer";

export const Home = () => {
  return (
    <>
      <CreateTodoContainer />
      <TodosContainer />
    </>
  );
};
