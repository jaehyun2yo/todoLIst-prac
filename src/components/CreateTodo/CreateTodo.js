import React, { useState } from "react";
import "./CreateTodo.css";
import { TodoForm } from "./TodoForm";
// import { addTodo } from "../../redux/modules/todos";

export const CreateTodo = ({ onCreate }) => {
  const [isEditing, setIsEditing] = useState(false);

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
        <TodoForm onCancel={stopEditingHandler} onCreate={onCreate} />
      )}
    </div>
  );
};
