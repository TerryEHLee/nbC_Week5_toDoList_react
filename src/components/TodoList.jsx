import React from "react";

export const TodoList = ({ todos, setTodos, listIsDone }) => {
  return (
    <div>
      <h1>{listIsDone ? "Done Lists" : "Working Lists"}</h1>
      {todos
        .filter((todo) => todo.isDone === listIsDone)
        .map((todo) => {
          return (
            <div
              key={todo.id}
              style={{
                border: "1px solid black",
              }}
            >
              <h3>{todo.plan}</h3>
              <p>{todo.context}</p>
              <p>{todo.dueDate}</p>

              <button
                onClick={() => {
                  const newTodos = todos.map((item) => {
                    if (item.id === todo.id) {
                      return {
                        ...item,
                        isDone: !item.isDone,
                      };
                    } else {
                      return item;
                    }
                  });

                  setTodos(newTodos);
                }}
              >
                {listIsDone ? "Back to working" : "complete"}
              </button>
              <button
                onClick={() => {
                  const deletedTodos = todos.filter((item) => {
                    return item.id !== todo.id;
                  });

                  setTodos(deletedTodos);
                }}
              >
                delete
              </button>
            </div>
          );
        })}
    </div>
  );
};
