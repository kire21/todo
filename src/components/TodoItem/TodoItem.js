import React from "react";
import {
  MdCheckCircleOutline,
  MdDeleteForever,
  MdOutlineModeEditOutline,
} from "react-icons/md";

const TodoItem = ({ todo, inputValue, deleteTodo, completeTodo, editTodo }) => {
  return (
    <div
      key={todo.id}
      className={`${
        todo.completed ? "border-green-400" : " border-blue-400"
      } relative w-2/5 mx-auto my-5 p-4 border-2 rounded-md`}>
      <h2 className={`${todo.completed ? "line-through" : ""}`}>
        {todo.name || inputValue}
      </h2>
      {!todo.isEdit && (
        <div>
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
          <button
            onClick={() => editTodo(todo.name, todo.id)}
            className="absolute right-28 mr-2 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">
            <MdOutlineModeEditOutline size={18} color="white" />
          </button>
        </div>
      )}

      {todo.isEdit && (
        <div>
          <button
            onClick={() => editTodo(todo.name, todo.id)}
            className="text-white absolute  right-2  bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
