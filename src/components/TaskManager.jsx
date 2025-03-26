import React, { useEffect, useState } from 'react'
import AddTask from './AddTask'
import TasksList from './TasksList'
import FilterTasks from './FilterTasks'

const TaskManager = () => {
    const [filter, setFilter] = useState(JSON.parse(localStorage.getItem("filter")) || 'all')

    useEffect(() => {
      localStorage.setItem("filter", JSON.stringify(filter))
    }, [filter])

  return (
    <>
        <h1>Taskify</h1>
        <div>
            <AddTask />

            <TasksList filter={filter}/>

            <FilterTasks filter={filter} setFilter={setFilter}/>

        </div>
    </>
  )
}

export default TaskManager
