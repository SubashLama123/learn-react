import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  if (tasks.length === 0) {
    return <p className="text-center text-gray-500">No tasks available.</p>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
