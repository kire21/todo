import React, { useRef, useState } from "react";

import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(false);
  const inputRef = useRef("");

  const createTodo = (todo) => {
    const newTodo = {
      name: todo,
      id: Math.floor(Math.random() * 1000),
      completed: false,
      isEdit: false,
    };

    if (todo.length <= 2) return;

    setTodos((prevState) => [...prevState, newTodo]);
    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const deleteTodo = (todoId) => {
    const filterArray = todos.filter((todo) => todo.id !== todoId);
    setTodos(filterArray);
  };

  const completeTodo = (todoId) => {
    const filterTodo = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(filterTodo);
  };

  const editTodo = (todoText, todoId) => {
    setEdit(!edit);
    setInputValue(todoText);
    inputRef?.current?.focus();
    const filterTodo = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          name: inputValue,
          isEdit: !todo.isEdit,
        };
      }
      return todo;
    });
    setTodos(filterTodo);
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center m-10 text-blue-600">
        Todo App
      </h1>
      <TodoForm
        edit={edit}
        inputValue={inputValue}
        handleChange={handleChange}
        createTodo={createTodo}
        inputRef={inputRef}
      />
      <TodoList
        todos={todos}
        inputValue={inputValue}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
        editTodo={editTodo}
      />
    </div>
  );
};

export default App;
