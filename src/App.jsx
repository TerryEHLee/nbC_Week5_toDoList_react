// Path: src/App.js

import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [todo, setTodo] = useState([
    {
      id: Math.random(),
      plan: "reactHomework",
      context: "making a video, explaining the process of counting app.",
      dueDate: "06.18.Sun",
    },
  ]);

  const [plan, setPlan] = useState("");
  const [context, setContext] = useState("");
  const [dueDate, setDueDate] = useState("");

  const addPlanHandler = (event) => {
    setPlan(event.target.value);
  };

  const addContextHandler = (event) => {
    setContext(event.target.value);
  };

  const addDueDateHandler = (event) => {
    setDueDate(event.target.value);
  };

  const addTodoHandler = (event) => {
    event.preventDefault();
    const newTodo = {
      id: Math.random(),
      plan,
      context,
      dueDate,
    };

    setTodo([...todo, newTodo]);
    setPlan("");
    setContext("");
    setDueDate("");
  };

  const deleteTodoHandler = (id) => {
    const newTodo = todo.filter((todo) => todo.id !== id);
    setTodo(newTodo);
  };

  const completeHandler = (id) => {
    const completeTodo = todo.filter((todo) => todo.id !== id);
    const completeDoneTodo = todo.filter((plan) => plan.id === id);

    setTodo(completeTodo);
    setDoneTodo([...doneTodo, ...completeDoneTodo]);
  };

  const [doneTodo, setDoneTodo] = useState([
    {
      id: 1,
      plan: "studying JS",
      context: "Using JS, made movie Page!",
      dueDate: "06.09.Fri.",
    },
  ]);

  const doneRemoveHandler = (id) => {
    const canceledTodo = doneTodo.find((todo) => todo.id === id);
    const updatedDoneTodo = doneTodo.filter((todo) => todo.id !== id);

    setDoneTodo(updatedDoneTodo);
    setTodo([...todo, canceledTodo]);
  };

  return (
    <div className='frame'>
      <nav className='nav'>
        <div>Terry Todo List</div>
        <div>Keep Going 🚀🔥💎</div>
      </nav>
      <form>
        <div className='add-container'>
          <div className='input-group'>
            <label className='form-label'>Title</label>
            <input className='input' value={plan} onChange={addPlanHandler} />

            <label className='form-label'>Context</label>
            <input
              className='input'
              value={context}
              onChange={addContextHandler}
            />
          </div>

          <button className='add-button' onClick={addTodoHandler}>
            Add
          </button>
        </div>
      </form>
      <h1>Working..⚡️</h1>
      <div className='app-style'>
        {todo.map((item) => {
          return (
            <div key={item.id} className='component-style'>
              <h2>{item.plan}</h2>
              <div>{item.context}</div>
              <div className='btn'>
                <button
                  className='red-btn'
                  onClick={() => deleteTodoHandler(item.id)}
                >
                  Delete
                </button>
                <button
                  className='green-btn'
                  onClick={() => completeHandler(item.id)}
                >
                  Complete
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <h1>Done..!!🧸</h1>
      <div className='app-style'>
        {doneTodo.map((item) => {
          return (
            <div key={item.id} className='component-style'>
              <h2>{item.plan}</h2>
              <div>{item.context}</div>
              <div className='btn'>
                <button
                  className='red-btn'
                  onClick={() => doneRemoveHandler(item.id)}
                >
                  Delete
                </button>
                <button
                  className='green-btn'
                  onClick={() => deleteTodoHandler(item.id)}
                >
                  Cancel
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
