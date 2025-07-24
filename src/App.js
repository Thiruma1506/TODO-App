import { useState } from "react";
import "./styles.css";
import InputTodo from "./InputTodo";

export default function App() {
  const [todoList, SetTodoList] = useState([]);

  function addTodo(input) {
    const newItem = {
      id: Date.now(),
      content: input,
      isCompeted: false,
    };
    SetTodoList([...todoList, newItem]);
  }

  function handleDelete(id) {
    SetTodoList(todoList.filter((item) => item.id !== id));
  }

  function handleCompleted(id) {
    SetTodoList(
      todoList.map((item) =>
        item.id === id ? { ...item, isCompeted: !item.isCompeted } : item
      )
    );
  }

  return (
    <div className="TodoApp">
      <InputTodo onAddTodo={addTodo} />
      <ul className="ListingArea">
        {todoList.map((item) => (
          <li key={item.id} className={item.isCompeted ? "complete" : ""}>
            {item.content}
            <button
              className="completed"
              onClick={() => handleCompleted(item.id)}
            >
              Completed
            </button>
            <button
              className="itemDelete"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
