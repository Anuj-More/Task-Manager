import { createContext, useReducer, useEffect  } from "react"

export const TasksContext = createContext(null)
export const TasksDispatchContext = createContext(null)

export const TasksProvider = ({ children }) => {
    const [tasks, dispatch] = useReducer(tasksReducer, [], () => JSON.parse(localStorage.getItem("tasks")) || [
        {id: 0, text: 'task 1', done: false},
        {id: 1, text: 'task 2', done: true},
        {id: 2, text: 'task 3', done: false}
    ])

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }, [tasks]);

    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    )
}

const tasksReducer = (tasks, action) => {
    switch(action.type){
        case 'changed': 
            return (
                tasks.map(task => {
                    if(task.id === action.task.id){
                        return action.task
                    } else {
                        return task
                    }
                })
            )

        case 'added': 
            return [
                ...tasks,
                {
                    id: crypto.randomUUID(),
                    text: action.text,
                    done: false
                }
            ]

        case 'deleted': 
            return (
                tasks.filter(task =>
                    task.id !== action.id
                )
            )
    }
}