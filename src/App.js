import { Todo } from "./components/Todo/Todo";
// import { CreateTodo } from "./components/CreateTodo/CreateTodo";
import { useState } from "react";
import CreateTodoContainer from "./components/CreateTodo/CreateTodoContainer";
import TodosContainer from "./components/Todo/TodosContainer";
// const EXAMPLE_DATA = [
//   {
//     id: "e1",
//     content: "리액트공부하기",
//     checked: false,
//     deleted: false,
//   },
//   {
//     id: "e2",
//     content: "코딩영어공부",
//     checked: false,
//     deleted: false,
//   },
//   {
//     id: "e3",
//     content: "cs공부하기",
//     checked: false,
//     deleted: false,
//   },
//   {
//     id: "e4",
//     content: "운동",
//     checked: false,
//     deleted: false,
//   },
// ];

function App() {
  // const [todos, setTodos] = useState([]);

  // const addTodoHandler = (todoData) => {
  //   setTodos((prevTodos) => {
  //     return [todoData, ...prevTodos];
  //   });
  // };

  // const deleteTodoHandler = (todoData) => {
  //   setTodos((prevTodos) = > {
  //     return []
  //   })
  // }

  // console.log(todos);
  return (
    <div>
      {/* onAddTodo={addTodoHandler} */}
      <CreateTodoContainer />
      {/* <Todo items={todos} setTodos={setTodos}></Todo> */}
      <TodosContainer></TodosContainer>
    </div>
  );
}

export default App;
