import React, { useState } from "react";
import uuid from "react-uuid";

export const Input = ({ todos, setTodos }) => {
  const [plan, setPlan] = useState("");
  const [context, setContext] = useState("");
  const [dueDate, setDueDate] = useState("");

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const newTodo = {
            id: uuid(),
            plan: plan,
            context: context,
            dueDate: dueDate,
            isDone: false,
          };

          setTodos([...todos, newTodo]);
        }}
      >
        <input
          value={plan}
          onChange={(event) => {
            setPlan(event.target.value);
          }}
        />
        <input
          value={context}
          onChange={(event) => {
            setContext(event.target.value);
          }}
        />
        <input
          value={dueDate}
          onChange={(event) => {
            setDueDate(event.target.value);
          }}
        />
        <button>input⚡️</button>
      </form>
    </div>
  );
};
