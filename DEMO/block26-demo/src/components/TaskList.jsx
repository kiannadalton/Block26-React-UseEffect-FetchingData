export default function TaskList({ tasks, setTasks }) {
  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
        };
      } else {
        return task;
      }
    });

    setTasks(updatedTasks);
  };

  // The below is another way to show a Loading message if you don't want to use a ternary operator. This also gives you an easy way to control how that message is displayed
  //   if(tasks.length === 0){
  //     return (
  //         <section>
  //             <h2>Loading...</h2>
  //         </section>
  //     )
  //   }

  return (
    <section>
      {/* displays Loading message when array is empty (=== 0). Re-renders to empty string wheb data loads, then the component updates automatically in the App.jsx */}
      {tasks.length === 0 ? "Loading..." : ""}
      {tasks.map((taskObj) => (
        <div
          onClick={() => completeTask(taskObj.id)}
          className={taskObj.completed ? "complete" : ""}
          key={taskObj.id}
        >
          {taskObj.task}
        </div>
      ))}
    </section>
  );
}
