import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import type { Todo } from "../utils/localStorage";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

// 顯示待辦清單
const TodoList: React.FC = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);

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

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <div className="mt-4">
        {todos.length === 0 ? (
          <p className="text-center text-gray-500">
            No tasks yet. Add one above!
          </p>
        ) : (
          todos.map((todo) => (
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
    </div>
  );
};

export default TodoList;
