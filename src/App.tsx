import { useEffect, useState } from "react";

import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { TodoResults } from "./components/TodoResults";
import { TodosProvider } from "./TodosContext";
// import fs from "fs";

import todosTemplate from "./data/todos.json";
import "./App.scss";

const App = () => {
  const [todos, setTodos] = useState<any[]>([]);

  useEffect(() => {
    setTodos(todosTemplate);
  }, []);

  return (
    <div className="root">
      <TodosProvider value={{ todos, setTodos }}>
        <TodoList />
        <TodoResults />
        <TodoForm />
      </TodosProvider>
    </div>
  );
};

export default App;
