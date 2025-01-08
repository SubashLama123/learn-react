import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/tasks/tasksSlice";

const store = configureStore({
  reducer: {
    tasks: taskReducer, // Register the `tasks` slice reducer
  },
});

export default store;
