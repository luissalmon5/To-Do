
export function TaskList( { list, updateTask }) {
    const handleChange = (e) => {
        updateTask(Number(e.target.id));
    }
    return(
        <>
            <section>
                <div className="">
                    <div className="mt-5 flex flex-col items-start gap-3">
                        {
                            list.map((task, index) => {
                                return (
                                    <div
                                    className="w-full flex gap-5 items-center justify-start pb-2 border-b border-rose-200"
                                    key={index}
                                    >
                                        <input 
                                        className="accent-rose-400 border-0 outline-0" 
                                        type="checkbox"
                                        id={task.id}
                                        value={task.complete} 
                                        disabled={task.complete}
                                        checked={task.complete ? "checked" : ""}
                                        onChange={handleChange}
                                        />
                                        <span className={ !task.complete ? "font-bold text-lg text-rose-400" : "font-bold text-lg text-gray-300 line-through" }>{task.text}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </> 
    )
}