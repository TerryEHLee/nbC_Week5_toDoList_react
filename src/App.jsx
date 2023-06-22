// Path: src/App.js

import React, { useState } from "react";
import "./App.css";
import uuid from "react-uuid";
import { Input } from "./components/Input";
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      plan: "reactHomework",
      context: "making a video, explaining the process of counting app.",
      dueDate: "06.18.Sun",
      isDone: false,
    },
  ]);

  return (
    <div className='frame'>
      <nav className='nav'>
        <div>Terry Todo List</div>
        <div>Keep Going 🚀🔥💎</div>
      </nav>
      <main>
        <Input todos={todos} setTodos={setTodos} />
        <div>
          <TodoList todos={todos} setTodos={setTodos} listIsDone={false} />
          <TodoList todos={todos} setTodos={setTodos} listIsDone={true} />
        </div>
      </main>
    </div>
  );
}

export default App;
