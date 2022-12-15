import React from "react";
import { Todo } from "./Todo";
import { useDispatch, useSelector } from "react-redux";
import { checkedTodo, deleteTodo } from "../../redux/modules/todos";

// 리덕스 사용하는 로직
const TodosContainer = () => {
  // useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook 입니다.
  const dispatch = useDispatch();
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook입니다.
  // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일합니다.
  const todos = useSelector((state) => state.todos);

  const onDeleteTodo = (id) => dispatch(deleteTodo(id));
  const onCheckedTodo = (id) => dispatch(checkedTodo(id));

  return (
    <Todo
      todos={todos}
      onDeleteTodo={onDeleteTodo}
      onCheckedTodo={onCheckedTodo}
    ></Todo>
  );
};

export default TodosContainer;
