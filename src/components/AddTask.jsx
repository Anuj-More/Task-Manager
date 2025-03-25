import React, { useContext, useState } from 'react'
import { TasksDispatchContext } from '../contexts/TasksContext'

const AddTask = () => {
    const dispatch = useContext(TasksDispatchContext)
    const [text, setText] = useState('')
    
  return (
    <div className='add-task'>
        <input 
            value={text}
            placeholder='Add Task'
            onChange={(e) => {
                setText(e.target.value)
            }}
        />
        <button
            onClick={() => {
                if(text !== ''){
                    dispatch({
                        type: 'added',
                        text: text
                    }) 
                    setText('')
                }
            }}
        >
            Add
        </button>
    </div>
  )
}

export default AddTask
