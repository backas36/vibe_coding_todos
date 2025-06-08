import React, { useState } from "react";
import type { Todo } from "../utils/localStorage";

interface TodoItemProps {
  todo: Todo;
  toggleComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, text: string) => void;
}

// 顯示單一待辦項目
const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleComplete,
  deleteTodo,
  updateTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      updateTodo(todo.id, editValue.trim());
    }
    setIsEditing(!isEditing);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      updateTodo(todo.id, editValue.trim());
      setIsEditing(false);
    } else if (e.key === "Escape") {
      setEditValue(todo.text);
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center p-3 border-b group hover:bg-gray-50">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
        className="mr-2 h-5 w-5"
        aria-label={`Mark ${todo.text} as ${
          todo.completed ? "incomplete" : "complete"
        }`}
      />
      {isEditing ? (
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-grow p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          autoFocus
        />
      ) : (
        <span
          className={`flex-grow cursor-pointer ${
            todo.completed ? "line-through text-gray-400" : ""
          }`}
          onClick={() => setIsEditing(true)}
        >
          {todo.text}
        </span>
      )}
      <button
        onClick={handleEdit}
        className="text-blue-500 hover:text-blue-700 mx-2 opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label={isEditing ? "Save" : "Edit"}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Delete"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
