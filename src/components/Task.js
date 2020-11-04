import React, {useContext} from 'react'
import {TaskListContext} from '../context/TaskListContext';

function Task({ task }) {
    const {deleteTask, findTask } = useContext(TaskListContext);
    return (
        <li className="list-item">
            <span>{task.title}</span>
            <div>
                <button onClick={()=> deleteTask(task.id)} className='btn-delete task-btn'>
                    <i className='fas fa-trash-alt'></i>
                </button>
                <button onClick={() => findTask(task.id)} className='btn-edit task-btn'>
                    <i className='fas fa-pen'></i>
                </button>
            </div>
        </li>
    )
}

export default Task;