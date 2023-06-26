import { useRef } from "react";

const TodoForm = (props) => {

    const titleInputRef = useRef();
    const descriptionInputRef =  useRef();
    const dateInputRef = useRef();

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const id = Math.random().toString();
        const enteredTitle = titleInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        const enteredDate = dateInputRef.current.value;

        const newTodoData = {
            id,
            enteredTitle,
            enteredDescription,
            enteredDate
        }
        props.newTodo(newTodoData)
    }

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label>Title: </label>
        <input type="text" ref={titleInputRef}/>
      </div>
      <div>
        <label>Description: </label>
        <input type="text" ref={descriptionInputRef}/>
      </div>
      <div>
        <label>Date: </label>
        <input type="date" ref={dateInputRef}/>
      </div>
      <div>
        <button type="submit">Add Task</button>
      </div>
    </form>
  );
};

export default TodoForm;
