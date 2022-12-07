import { Todo } from "./components/Todo/Todo";
import { CreateTodo } from "./components/CreateTodo/CreateTodo";
import { useState } from "react";
const EXAMPLE_DATA = [
  {
    id: "e1",
    content: "리액트공부하기",
    checked: false,
    deleted: false,
  },
  {
    id: "e2",
    content: "코딩영어공부",
    checked: false,
    deleted: false,
  },
  {
    id: "e3",
    content: "cs공부하기",
    checked: false,
    deleted: false,
  },
  {
    id: "e4",
    content: "운동",
    checked: false,
    deleted: false,
  },
];

function App() {
  const [todos, setTodos] = useState(EXAMPLE_DATA);

  const addTodoHandler = (todoData) => {
    setTodos((prevTodos) => {
      return [todoData, ...prevTodos];
    });
  };

  // const deleteTodoHandler = (todoData) => {
  //   setTodos((prevTodos) = > {
  //     return []
  //   })
  // }

  console.log(todos);
  return (
    <div>
      <CreateTodo onAddTodo={addTodoHandler} />
      <Todo items={todos} setTodos={setTodos}></Todo>
    </div>
  );
}

export default App;
