import { createSlice } from '@reduxjs/toolkit';

const notesSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    addNote: (state, action) => {
      state.push(action.payload);
    },
    deleteNote: (state, action) => {
      return state.filter(note => note.id !== action.payload);
    },
    updateNote: (state, action) => {
      const { id, content } = action.payload;
      const note = state.find(note => note.id === id);
      if (note) note.content = content;
    },
  },
});

export const { addNote, deleteNote, updateNote } = notesSlice.actions;
export default notesSlice.reducer;
