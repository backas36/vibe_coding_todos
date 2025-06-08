import type { FormEvent } from "react";
import React, { useState } from "react";

interface TodoFormProps {
  addTodo: (value: string) => void;
}

// 新增/編輯待辦表單
const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value.trim());
    setValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex mb-4"
      aria-label="Add todo form"
    >
      <input
        type="text"
        className="flex-grow p-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new task..."
        aria-label="New todo item"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Add todo"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
