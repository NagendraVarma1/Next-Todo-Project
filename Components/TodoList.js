
const TodoList = (props) => {

  return (
    <ul>
      <h1>All Todos</h1>
      {props.todo.map((data) => (
        <li key={data.id}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>{data.title}</h2>
            <h2>{data.description}</h2>
            <h2>{data.date}</h2>
            <button>Completed</button>
            <button>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
