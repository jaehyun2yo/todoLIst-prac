import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/modules/todos";
import { CreateTodo } from "./CreateTodo";

const CreateTodoContainer = () => {
  // useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook 입니다.
  const dispatch = useDispatch();

  // 각 액션들을 디스패치하는 함수들을 만드세요
  const onCreate = (content) => dispatch(addTodo(content));

  return <CreateTodo onCreate={onCreate} />;
};

export default CreateTodoContainer;
