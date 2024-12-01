import { useState } from "react";

function TaskInput({ addTask }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTask(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add your task"
      />
      <button type="submit" className="addTask">Add</button>
    </form>
  );
}

export default TaskInput;
