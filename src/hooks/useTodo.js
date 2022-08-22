import { useState } from "react";

const useTodo = (initialTasks) => {
  const [tasks, setTasks] = useState(initialTasks);

  return {
    tasks,
    addTask: (values) => {
      console.log(values)
      const newTask = {
        id: Date.now(),
        body: values.body,
        isDone: false,
      };
      setTasks([...tasks, newTask])
    },
    deleteTask : (id) => {
      setTasks(tasks.filter((task)=>task.id!==id))
    }
  };
};

export default useTodo;
