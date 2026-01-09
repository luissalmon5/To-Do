import TaskForm from "./components/TaskForm"
import { TaskList } from "./components/TaskList";
import { useEffect, useState } from 'react';
import { saveTaskList } from "./logic/storage/index.js";



function App() {

  const [tasksList, setTaskList] = useState(() => {
    const taskListFromStorage = window.localStorage.getItem('taskList');
    return taskListFromStorage ? JSON.parse(taskListFromStorage) : [];
  });
  const addTask = (text) => {
    if (!text.trim()) return;

    const newTask = {
      id: Date.now(),
      text,
      complete: false
    }
    setTaskList(prev => [...prev, newTask]);
  }

  const updateTask = (id) => {
    const newTaskList = tasksList.map((task) => {
      if (task.id === id && !task.complete) {
        task.complete = true;
      }
    });

    setTaskList(newTaskList);
  }

  useEffect(() => {
    if (tasksList.length === 0) return;
    saveTaskList(tasksList);
  }, [tasksList]);


  return (
    <>
      <div className="mx-auto w-full md:w-md sm:w-sm rounded-xl h-screen">
        <main className="flex flex-col items-center justify-center h-screen">
          <div className="card-task w-lg bg-white rounded-xl p-5">
            <TaskForm addTask={addTask} />
            <TaskList list={tasksList} updateTask={updateTask} />
          </div>
        </main>
      </div>
    </>
  )
}

export default App