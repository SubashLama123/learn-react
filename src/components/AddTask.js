import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask } from "../features/tasks/tasksSlice";
import { useNavigate, useParams } from "react-router-dom";
const AddTask = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const tasks = useSelector((state) => state.tasks);
  // Access the `tasks` array from the Redux store using the `useSelector` hook.

  const taskToEdit = tasks.find((task) => task.id === Number(id));
  // Find the task to edit based on the `id` from the URL. 
  // If the `id` matches a task in the state, we will pre-fill the form with its data.

  const [title, setTitle] = useState("");
  // State for storing the task title. Default is an empty string.

  const [image, setImage] = useState(null);
  // State for storing the image file as a base64 string. Default is `null`.

  useEffect(() => {
    if (taskToEdit) {
      // If a task is being edited, pre-fill the form fields with its data.
      setTitle(taskToEdit.title);
      setImage(taskToEdit.image);
    }
  }, [taskToEdit]);
  // The `useEffect` hook runs whenever `taskToEdit` changes.

  const handleImageChange = (e) => {
    // Handle the change event when an image is selected.
    const file = e.target.files[0];
    // Get the first file from the file input.

    if (file) {
      const reader = new FileReader();
      // Create a new `FileReader` to read the file.

      reader.onloadend = () => setImage(reader.result);
      // When the file is fully loaded, set the image state to the base64-encoded string.

      reader.readAsDataURL(file);
      // Read the file as a Data URL (base64 string).
    }
  };

  const handleSubmit = () => {
    // Handle the form submission.

    if (taskToEdit) {
      // If we are editing a task:
      dispatch(updateTask({ id: taskToEdit.id, title, image }));
      // Dispatch the `updateTask` action with the updated task data (id, title, image).
    } else {
      // If we are adding a new task:
      dispatch(addTask({ id: Date.now(), title, image }));
      // Dispatch the `addTask` action with a new task object. 
      // Use `Date.now()` to generate a unique ID.
    }

    navigate("/");
    // Navigate back to the task list after submission.
  };

  return (
    <div className="p-4">
      {/* Main container with padding. Tailwind CSS class `p-4`. */}

      <h1 className="text-2xl font-bold">
        {/* Page heading that dynamically changes based on whether the task is being added or edited. */}
        {taskToEdit ? "Edit" : "Add"} Task
      </h1>

      <div className="mt-4">

        <input
          type="text"
          placeholder="Task title"
          value={title}
          // Bind the `title` state to the input value.

          onChange={(e) => setTitle(e.target.value)}
          // Update the `title` state whenever the input value changes.

          className="border p-2 mr-2"
        />

        <input
          type="file"
          onChange={handleImageChange}
          // Handle the file selection using the `handleImageChange` function.

          className="border p-2 mr-2"

        />
        <button
          onClick={handleSubmit}
          // Call the `handleSubmit` function when the button is clicked.

          className="bg-blue-500 text-white px-4 py-2 rounded"
        // Styling using Tailwind CSS: blue background, white text, padding, rounded corners.
        >
          {taskToEdit ? "Update Task" : "Add Task"}
          {/* Button text dynamically changes based on whether the task is being added or edited. */}
        </button>
      </div>
    </div>
  );
};

export default AddTask;
// Export the `AddTask` component as the default export for use in other files.
