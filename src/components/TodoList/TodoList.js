import React from "react";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({
  todos,
  inputValue,
  deleteTodo,
  completeTodo,
  editTodo,
}) => {
  return (
    <>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            inputValue={inputValue}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
            editTodo={editTodo}
          />
        );
      })}
    </>
  );
};

export default TodoList;
