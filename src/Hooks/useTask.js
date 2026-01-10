import { useState, useEffect } from "react";
import { saveTaskList } from "../logic/storage/index.js";

export function useTask() {

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
        setTaskList(prev => prev.map(task =>
            task.id === id ? { ...task, complete: !task.complete } : task
        ));
    }

    const deleteTask = (id) => {
        setTaskList(prev => prev.filter((task) => task.id !== id));
    }

    
    useEffect(() => {
        saveTaskList(tasksList);
    }, [tasksList])

    return {
        tasksList,
        setTaskList,
        addTask,
        updateTask,
        deleteTask
    }

}