import React, { useState } from 'react'
import AddTask from './AddTask'
import TasksList from './TasksList'

const TaskManager = () => {
    const [filter, setFilter] = useState('none')

  return (
    <>
        <h1>Taskify</h1>
        <div>
            <AddTask />

            <TasksList />

        </div>
    </>
  )
}

export default TaskManager
