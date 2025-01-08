import { useDispatch } from 'react-redux';
import { deleteTask, updateTask } from './tasksSlice';
import { useState } from 'react';

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updateTask({ id: task.id, title }));
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between p-2 border-b">
      {isEditing ? (
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-1 flex-grow mr-2"
        />
      ) : (
        <span>{task.title}</span>
      )}
      <div className="flex gap-2">
        {isEditing ? (
          <button onClick={handleUpdate} className="text-green-500">
            Save
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="text-blue-500">
            Edit
          </button>
        )}
        <button
          onClick={() => dispatch(deleteTask(task.id))}
          className="text-red-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
