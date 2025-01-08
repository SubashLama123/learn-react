import React from "react";
import { useSelector, useDispatch } from "react-redux"; // Import hooks for accessing and dispatching Redux state
import { deleteTask } from "../features/tasks/tasksSlice"; // Import the action creator for deleting a task
import { Link } from "react-router-dom"; // Import Link for navigation

const TaskList = () => {
  // Use the `useSelector` hook to access the tasks from the Redux state
  const tasks = useSelector((state) => state.tasks);
  console.log({ tasks })

  // Use the `useDispatch` hook to create a dispatch function for dispatching actions
  const dispatch = useDispatch();

  // Function to handle deleting a task
  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id)); // Dispatch the deleteTask action with the task ID
  };
  return (
    <div className="p-4">
      {/* Page Title */}
      <h1 className="text-2xl font-bold">Task List</h1>

      {/* Link to the "Add Task" page */}
      <Link
        to="/add" // Route to the add task page
        className="bg-green-500 text-white px-4 py-2 rounded mt-4 inline-block"
      >
        Add New Task
      </Link>

      {/* Task List */}
      <ul className="mt-4">
        {/* Loop through the tasks and display each task */}
        {tasks.map((task) => (
          <li
            key={task.id} // Unique key for each task
            className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded"
          >
            <div className="flex items-center">
              {/* Check if the task has an image and display it */}
              {task.image && (
                <img
                  src={task.image} // The image URL or data for the task
                  alt="Task" // Alternate text for the image
                  className="w-12 h-12 rounded-full mr-2" // Styling for the image
                />
              )}
              {/* Display the task title */}
              <span>{task.title}</span>
            </div>
            <div>
              {/* Link to the "Edit Task" page for the current task */}
              <Link
                to={`/edit/${task.id}`} // Dynamic route for editing the task
                className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
              >
                Edit
              </Link>
              {/* Button to delete the current task */}
              <button
                onClick={() => handleDeleteTask(task.id)} // Call the delete function with the task ID
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList; 
