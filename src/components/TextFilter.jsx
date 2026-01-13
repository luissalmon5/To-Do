export const TextFilter = ({ setTextFilter }) => {

    return (
        <section>
            <div className="flex gap-3 items-center">
                <input 
                id="search"
                placeholder="Search by task"
                className={"border-2 p-2 focus:outline-none focus:ring-0 border-rose-400 hover:border-rose-500 rounded-2xl w-full"}
                onChange={(e) => {setTextFilter(e.target.value)}}
                type="text" />
            </div>
        </section>
    )

}