import React, { useContext } from 'react'
import { TasksContext } from '../contexts/TasksContext'
import TaskItem from './TaskItem'

const TasksList = () => {
    const tasks = useContext(TasksContext)
    
  return (
    <div>
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <TaskItem task={task}/>
                </li>
            ))}
            </ul>
    </div>
  )
}

export default TasksList
