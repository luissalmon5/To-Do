export function TaskList( { list, updateTask, deleteTask}) {

    return(
            <section>
                <div>
                    <div className="mt-5 flex flex-col items-start gap-3">
                        {
                           list.length ? list.map((task) => {
                                return (
                                    <div
                                    className={ "w-full flex justify-between items-center pb-2 border-b border-rose-200"}
                                    key={task.id}
                                    >
                                        <input 
                                        className="accent-rose-400 border-0 outline-0" 
                                        type="checkbox"
                                        disabled={task.complete}
                                        checked={task.complete}
                                        onChange={() => updateTask(task.id)}
                                        />
                                        <span className={ !task.complete ? "font-bold text-lg text-rose-400" : "font-bold text-lg text-gray-300 line-through" }>{task.text}</span>
                                        <button
                                            className={`justify-self-end-safe border bg-rose-600 text-white p-2 font-semibold cursor-pointer ${!task.complete ? "opacity-50" : "opacity-100"}`}
                                            onClick={() => deleteTask(task.id)}
                                            disabled={!task.complete}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                )
                            })
                            :
                            <div className="no-result w-full"><p className="font-bold text-lg text-center capitalize">no task added yet</p></div>
                        }
                    </div>
                </div>
            </section>
    )
}