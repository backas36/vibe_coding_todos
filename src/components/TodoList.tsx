import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import type { Todo } from "../utils/localStorage";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

// 顯示待辦清單
const TodoList: React.FC = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);
  // 狀態：目前篩選條件（'all' | 'active' | 'completed'）
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id: string, newText: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  // 根據 filter 狀態過濾 todos
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  // 清除所有已完成項目
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
      <TodoForm addTodo={addTodo} />
      {/* 篩選按鈕區塊 */}
      <div className="flex justify-center my-4">
        <button
          onClick={() => setFilter("all")}
          className={`mx-1 px-3 py-1 rounded ${
            filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          全部
        </button>
        <button
          onClick={() => setFilter("active")}
          className={`mx-1 px-3 py-1 rounded ${
            filter === "active" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          進行中
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`mx-1 px-3 py-1 rounded ${
            filter === "completed" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          已完成
        </button>
      </div>
      {/* 根據篩選顯示 todos 或空狀態訊息 */}
      <div className="mt-4">
        {filteredTodos.length === 0 ? (
          <p className="text-center text-gray-500">
            {todos.length === 0 ? "尚無任務，請新增！" : "無符合條件的任務"}
          </p>
        ) : (
          filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
          ))
        )}
      </div>
      {/* 清除已完成按鈕，僅在有已完成項目時顯示 */}
      {todos.some((todo) => todo.completed) && (
        <div className="mt-4 text-center">
          <button
            onClick={clearCompleted}
            className="text-sm text-red-500 hover:text-red-700"
          >
            清除已完成任務
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoList;
