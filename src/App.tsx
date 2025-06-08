import React from "react";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  return (
    <>
      {/* Skip link for keyboard users, only visible on focus */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute left-2 top-2 z-50 bg-white text-blue-700 px-3 py-2 rounded shadow"
      >
        Skip to main content
      </a>
      <div className="min-h-screen bg-white py-6 flex flex-col justify-center">
        <main id="main-content">
          <div className="max-w-2xl w-full mx-auto px-4">
            <h1 className="text-2xl font-semibold mb-6 text-center">
              Todo App
            </h1>
            <TodoList />
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
