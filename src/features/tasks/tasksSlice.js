import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",// The name of this slice
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload); // Add a new task to the state
    },

    updateTask: (state, action) => {
      const { id, title, image } = action.payload; // Destructure the payload
      const existingTask = state.find((task) => task.id === id);// Find the task to update
      if (existingTask) {
        existingTask.title = title; // Update the title
        existingTask.image = image; // Update the image
      }
    },



    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload); // Remove the task with the given ID
    },
  },
});
// Export the actions so they can be dispatched in components
export const { addTask, updateTask, deleteTask } = taskSlice.actions;
// Export the reducer so it can be added to the store
export default taskSlice.reducer;
