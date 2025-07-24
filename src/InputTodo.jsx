import { useState } from "react";

export default function InputTodo({ onAddTodo }) {
  const [input, SetInput] = useState("");

  function handleSave() {
    onAddTodo(input);
    SetInput("");
  }

  return (
    <div className="inputfield">
      <div>
        <input
          className="fieldarea"
          placeholder="Enter data"
          type="text"
          value={input}
          onChange={(event) => SetInput(event.target.value)}
        />
      </div>
      {/* button to send the data and save it to the TODO list  */}
      <button className="SaveInput" onClick={handleSave}>
        Save
      </button>
    </div>
  );
}
