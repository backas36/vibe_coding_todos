import React from "react";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-6 flex flex-col justify-center">
      <div className="max-w-2xl w-full mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-6 text-center">Todo App</h1>
        <TodoList />
      </div>
    </div>
  );
};

export default App;
