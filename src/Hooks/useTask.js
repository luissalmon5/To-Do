import { useState, useEffect } from "react";
import { saveTaskList } from "../logic/storage/index.js";

export function useTask() {

    const [tasksList, setTaskList] = useState(() => {
        const taskListFromStorage = window.localStorage.getItem('taskList');
        if (taskListFromStorage && taskListFromStorage !== "undefined") return JSON.parse(taskListFromStorage);
        return [];
    });

    const [filterText, setFilterText] = useState('');

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


    const filteredTasks = tasksList.filter(task =>
        task.text.toLowerCase().includes(filterText.toLowerCase())
    );
    
    useEffect(() => {
        saveTaskList(tasksList);
    }, [tasksList])

    return {
        tasksList: filteredTasks,
        addTask,
        updateTask,
        deleteTask,
        setFilterText
    }

}