import TaskForm from "./components/TaskForm"
import { TaskList } from "./components/TaskList";
import { useTask } from "./Hooks/useTask.js";



function App() {

  const { tasksList, addTask, updateTask, deleteTask} = useTask();

  return (
    <>
      <div className="mx-auto w-full md:w-md sm:w-sm rounded-xl h-screen">
        <main className="flex flex-col items-center justify-center h-screen">
          <div className="card-task w-lg bg-white rounded-xl p-5">
            <TaskForm addTask={addTask} />
            <TaskList list={tasksList} updateTask={updateTask} deleteTask={deleteTask} />
          </div>
        </main>
      </div>
    </>
  )
}

export default App