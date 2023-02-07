import React from "react";

const TodoForm = ({ inputValue, inputRef, edit, handleChange, createTodo }) => {
  return (
    <div className="relative w-2/5 mx-auto">
      <input
        type="text"
        id="text"
        value={inputValue}
        onChange={handleChange}
        ref={inputRef}
        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter todo..."
        required
      />

      {!edit && (
        <button
          onClick={() => createTodo(inputValue)}
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Add Todo
        </button>
      )}
    </div>
  );
};

export default TodoForm;
