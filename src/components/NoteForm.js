import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../features/notes/notesSlice';
import { nanoid } from 'nanoid';

function NoteForm() {
  const [note, setNote] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.trim()) {
      dispatch(addNote({ id: nanoid(), content: note.trim() }));
      setNote('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mb-4">
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Enter a note"
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-600"
      >
        Add Note
      </button>
    </form>
  );
}

export default NoteForm;
