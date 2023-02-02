import React, { useState } from "react";

import {
  MdDeleteForever,
  MdCheckCircleOutline,
  MdOutlineModeEditOutline,
} from "react-icons/md";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

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
    // First Option
    // const filterTodo = todos.filter((todo) => todo.id === todoId);
    // filterTodo[0].completed = !filterTodo[0].completed;

    // setTodos((prevState) => [...prevState]);

    // Second Option
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
    setInputValue(todoText);
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

      <div className="relative w-2/5 mx-auto">
        <input
          type="text"
          id="text"
          value={inputValue}
          onChange={handleChange}
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter todo..."
          required
        />

        <button
          onClick={() => createTodo(inputValue)}
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Add Todo
        </button>
      </div>
      {todos.map((todo) => {
        return (
          <div
            key={todo.id}
            className={`${
              todo.completed ? "border-green-400" : " border-blue-400"
            } relative w-2/5 mx-auto my-5 p-4 border-2 rounded-md`}>
            <h2>{todo.name || inputValue}</h2>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="absolute right-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 ">
              <MdDeleteForever size={18} color="white" />
            </button>
            <button
              onClick={() => completeTodo(todo.id)}
              className="absolute right-16 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ">
              <MdCheckCircleOutline size={18} color="white" />
            </button>
            {!todo.isEdit ? (
              <button
                onClick={() => editTodo(todo.name, todo.id)}
                className="absolute right-28 mr-2 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">
                <MdOutlineModeEditOutline size={18} color="white" />
              </button>
            ) : (
              <button
                onClick={() => editTodo(todo.name, todo.id)}
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Save Changes
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default App;
