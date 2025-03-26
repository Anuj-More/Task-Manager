import React, { useContext } from 'react'
import { TasksContext } from '../contexts/TasksContext'
import TaskItem from './TaskItem'

const TasksList = ({ filter }) => {
    const tasks = useContext(TasksContext)

    const filteredTasks = tasks.filter(task => {
      if(filter === 'pending'){
        return !task.done
      } else if(filter === 'completed') {
        return task.done
      } else {
        return true
      }
    })
    
  return (
    <div>
        <ul>
            {filteredTasks.map(task => (
                <li key={task.id}>
                    <TaskItem task={task}/>
                </li>
            ))}
            </ul>
    </div>
  )
}

export default TasksList
