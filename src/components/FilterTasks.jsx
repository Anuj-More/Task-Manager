import React from 'react'

const FilterTasks = ({ filter, setFilter }) => {
  return (
    <div>
      <h3>Filters</h3>
      <ul className='filters'>
        <li>
            <input 
                type='checkbox'
                checked={filter === 'pending'}
                onChange={() => {
                    setFilter('pending')
                }}
            />Pending
        </li>

        <li>
            <input 
                type='checkbox'
                checked={filter === 'completed'}
                onChange={() => {
                    setFilter('completed')
                }}
            />Complete
        </li>

        <li>
            <input 
                type='checkbox'
                checked={filter === 'all'}
                onChange={() => {
                    setFilter('all')
                }}
            />All
        </li>
      </ul>
        

    </div>
  )
}

export default FilterTasks
