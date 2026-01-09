
export const saveTaskList = (taskList) => {
    window.localStorage.setItem('taskList', JSON.stringify(taskList));
}