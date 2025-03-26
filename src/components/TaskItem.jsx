import React, { useContext, useState } from 'react'
import { TasksDispatchContext } from '../contexts/TasksContext'

const TaskItem = ({ task }) => {
  const dispatch = useContext(TasksDispatchContext)
  const [isEditing, setIsEditing] = useState(false)
  
  if(isEditing){
    return(
      <div className="task">
        <input 
          type='checkbox'
          checked={task.done}
          onChange={() => {
            dispatch({
              type: 'changed',
              task: {
                ...task,
                done: !task.done
              }
            })
          }}
        />
        <input 
          type='text'
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: 'changed',
              task: {
                ...task,
                text: e.target.value
              }
            })
          }}
        />

        <button
          onClick={() => {
            setIsEditing(false)
          }}
        >
          Save
        </button>
      </div>
    )
  } else {
    return (
      <div className='task'>
        <input 
          type='checkbox'
          checked={task.done}
          onChange={() => {
            dispatch({
              type: 'changed',
              task: {
                ...task,
                done: !task.done
              }
            })
          }}
        />
        <div>
          {task.text}
        </div>
        <button
          onClick={() => {
            setIsEditing(true)
          }}
        >
          Edit
        </button>
        <button
          onClick={() => {
            if(window.confirm("Are you sure you want to delete this task?")){
              dispatch({
                type: 'deleted',
                id: task.id
              })
            }
          }}
        >
          Delete
        </button>
      </div>
    )
  }
}

export default TaskItem
