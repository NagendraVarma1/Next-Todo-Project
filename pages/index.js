import TodoForm from "@/Components/TodoForm";
import TodoList from "@/Components/TodoList";
import { Fragment, useState } from "react";

function Home() {
  const [allTodos, setAllTodos] = useState([]);
  const newTodoHandler = (data) => {
    setAllTodos((prevState) => {
      return [...prevState, data];
    });
  };

  const deleteTodoHandler = (id) => {
    const todos = allTodos.filter((todo) => (todo.id !== id));
    setAllTodos(todos)
  }

  return (
    <Fragment>
      <TodoForm newTodo={newTodoHandler} />
      <TodoList todo={allTodos} deleteTodo={deleteTodoHandler} />
    </Fragment>
  );
}

export default Home;
