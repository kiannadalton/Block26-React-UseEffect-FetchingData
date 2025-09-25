import { useState, useEffect } from "react";
import "./App.css";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const getTasks = async () => {
      try {
        const response = await fetch(
          "https://todo-api-ur6k.onrender.com/api/todos"
        );
        // the response is an array, so we don't need to dig into an object (like what we did with .data in previous assignments). Make sure to console.log the response to see where the data is
        const json = await response.json();

        setTasks(json);
      } catch (error) {
        console.log(error);
      }
    };
    getTasks();
    // empty array helps to run useEffect once
  }, []);

  return (
    <div>
      <h1>To Do List</h1>
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
