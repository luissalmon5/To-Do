import { useState } from "react";

export function TaskForm( { addTask } ) {
    
    const [taskInput, setTaskInput] = useState('')
    const handleSubmit = () => {
        addTask(taskInput);
        setTaskInput('');
    }
    

    return (
        <>
            <section>
                <div className="title flex gap-3 items-center justify-center mb-4">
                    <h2 className='text-center font-extrabold text-2xl'>Task's</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff637e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-clipboard-list"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" /><path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2" /><path d="M9 12l.01 0" /><path d="M13 12l2 0" /><path d="M9 16l.01 0" /><path d="M13 16l2 0" /></svg>
                </div>

                <div className="input-group relative flex justify-center border-2 border-rose-400 hover:border-rose-500 rounded-2xl w-full">
                    <input
                        type='text'
                        placeholder='Enter task here'
                        className=' pl-5 pr-5 h-10 max-h-10 w-full focus:outline-none focus:ring-0'
                        value={taskInput}
                        onChange={(e) => setTaskInput(e.target.value)}
                    />
                    <button
                        className='p-2 border-0 rounded-xl bg-rose-400 hover:bg-rose-500 text-white font-bold h-10'
                        onClick={handleSubmit}
                        >
                        Add
                    </button>
                </div>
            </section>
        </>
    )
}

export default TaskForm;