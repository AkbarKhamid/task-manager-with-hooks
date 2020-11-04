import React, {useContext, useState, useEffect} from 'react'
import {TaskListContext} from '../context/TaskListContext';

function TaskForm() {
    const {addTask, clearList, editingTasks, editTasks } = useContext(TaskListContext);
    const [title, setTitle] = useState('');

    useEffect(()=> {
        if(editingTasks){
            setTitle(editingTasks.title)
            console.log(editingTasks);
        } else {
            setTitle('');
        }
    },[editingTasks]); // executes when the editingTasks changes

    const handleSubmit = e => {
        e.preventDefault();
        if(editingTasks){
            editTasks(title, editingTasks.id)
        }
        // title comes from the state, which is stored by handleChange
        addTask(title);
        setTitle('');
    }

    const handleChange = e => {
        setTitle(e.target.value);
    }
    return (
        <form onSubmit={handleSubmit} className="form">
            <input type="text" 
            className='task-input'
            placeholder='Enter a task'
            value={title}
            onChange={handleChange}
            required
            />
            <div className="buttons">
                <button className="btn add-task-btn">
                    {editingTasks ? 'Save' : 'Add'}
                </button>
                <button onClick={clearList} className="btn clear-btn">
                    Clear 
                </button>
            </div>

        </form>
    )
}

export default TaskForm
