import AddTask from './features/tasks/AddTask';
import TaskList from './features/tasks/TaskList';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Task Manager</h1>
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
