import { useState } from "react";

const TodoList = (props) => {

    const deleteTodo = (id) => {
        props.deleteTodo(id)
    }
  return (
    <ul>
      <h1>All Todos</h1>
      {props.todo.map((data) => (
        <li key={data.id}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>{data.enteredTitle}</h2>
            <h2>{data.enteredDescription}</h2>
            <h2>{data.enteredDate}</h2>
            <button>Completed</button>
            <button onClick={() => {deleteTodo(data.id)}}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
