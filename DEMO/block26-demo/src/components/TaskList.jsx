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

  return (
    <section>
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
