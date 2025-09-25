import { useState, useEffect } from "react";
import "./App.css";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(()=>{
    const getTasks = async () => {
      try {
        const response = await fetch()
      } catch (error) {
        console.log(error)
      }
    }
  }, [])

  return (
    <div>
      <h1>To Do List</h1>
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
