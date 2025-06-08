// localStorage 工具函式

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

// 取得 todos 陣列，無資料時回傳空陣列
export function getTodos(): Todo[] {
  try {
    const item = window.localStorage.getItem("todos");
    return item ? JSON.parse(item) : [];
  } catch {
    return [];
  }
}

// 儲存 todos 陣列
export function saveTodos(todos: Todo[]): void {
  try {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  } catch {
    // handle error
  }
}

// 泛型 get/set，可重用
export function getLocalStorage<T>(key: string, defaultValue: T): T {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch {
    return defaultValue;
  }
}

export function setLocalStorage<T>(key: string, value: T): void {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // handle error
  }
}
