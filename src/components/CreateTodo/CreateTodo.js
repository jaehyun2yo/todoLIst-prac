import React, { useState } from "react";
import "./CreateTodo.css";
import { TodoForm } from "./TodoForm";

export const CreateTodo = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveTodoDataHandler = (enteredTodoData) => {
    props.onAddTodo(enteredTodoData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-todo">
      {!isEditing && (
        <button onClick={startEditingHandler}>새 할일 작성하기</button>
      )}
      {isEditing && (
        <TodoForm
          onSaveTodoData={saveTodoDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
