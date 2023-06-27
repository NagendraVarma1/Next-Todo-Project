import TodoForm from "@/Components/TodoForm";
import TodoList from "@/Components/TodoList";
import { Fragment } from "react";
import { MongoClient } from "mongodb";

function Home(props) {
  async function newTodoHandler(enteredTodo) {
    const response = await fetch("/api/new-todos", {
      method: "POST",
      body: JSON.stringify(enteredTodo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);
  }

  // const deleteTodoHandler = (id) => {
  //   const todos = props.todos.filter((todo) => todo.id !== id);
  // };

  return (
    <Fragment>
      <TodoForm newTodo={newTodoHandler} />
      <TodoList todo={props.todos} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://Nagendra:Varma512@cluster0.snkiwp7.mongodb.net/todos?retryWrites=true&w=majority"
  );
  const db = client.db();

  const todosCollection = db.collection("todos");

 const allTodos = await todosCollection.find().toArray();

 client.close();

  return {
    props: {
      todos: allTodos.map(todo => ({
        title: todo.title,
        description: todo.description,
        date: todo.date,
        id: todo._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default Home;
