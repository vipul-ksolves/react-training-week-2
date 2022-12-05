import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";

//components
import ToDo from "./components/ToDo";
import AddTaskForm from "./components/AddTaskForm";

const App = () => {
  // Tasks (ToDo List) State
  const [toDo, setToDo] = useState([
    { id: 1, title: "task-1", status: false },
    { id: 2, title: "task-2", status: false },
  ]);

  // Temp State
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  // Add task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newData = { id: num, title: newTask, status: false };
      setToDo([...toDo, newData]);
      setNewTask("");
    }
  };

  // Delete task
  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };

  // Mark task as done or completed
  const markDone = (id) => {
    let newData = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newData);
  };

  return (
    <div className="container App">
      <br />
      <br />
      <br />
      <h2>To Do List </h2>
      <br />
      <br />

      {/* Add Task */}
      <AddTaskForm
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
      />

      {/* Display ToDos */}

      {toDo && toDo.length ? "" : "No Tasks..."}

      <ToDo toDo={toDo} deleteTask={deleteTask} markDone={markDone} />
    </div>
  );
};

export default App;
