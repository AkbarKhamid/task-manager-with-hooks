import React, {createContext, useState, useEffect} from 'react';
import {v4 as uuidv4 } from 'uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
    const initialSatate = JSON.parse(localStorage.getItem('TASK_MANAGER_tasks')) || []; 
    const [tasks, setTasks ] = useState(initialSatate);

    const [editingTasks, setEditingTask] = useState(null);

    useEffect(() => {
        localStorage.setItem('TASK_MANAGER_tasks', JSON.stringify(tasks));
    }, [tasks])
    const addTask = title => {
        setTasks([...tasks, {title, id:uuidv4()}])
    }

    const deleteTask = id => {
        // returns a new array of tasks exluding 
        // the one with the passed id
        setTasks(tasks.filter(task => task.id !== id ));
    }

    const clearList = () =>{
        setTasks([]);
    }

    const findTask = id => {
        const task = tasks.find(task => task.id === id);
        setEditingTask(task);
    }

    const editTasks = (title, id) => {
        const editedTasks = tasks.map(task => task.id === id ? {title, id} : task);
        setTasks(editedTasks);
        setEditingTask(null);
    }
    return (
        <TaskListContext.Provider value={{ 
            tasks, 
            addTask, 
            deleteTask, 
            clearList,
            findTask,
            editingTasks,
            editTasks
            }}>
            {props.children}
        </TaskListContext.Provider>
    )
};

export default TaskListContextProvider;