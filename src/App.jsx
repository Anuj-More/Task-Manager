import TaskManager from "./components/TaskManager"
import { TasksProvider } from './contexts/TasksContext'

function App() {

  return(
    <div className="container">
      <TasksProvider>
        <TaskManager />
      </TasksProvider>
    </div>
  )
}

export default App
