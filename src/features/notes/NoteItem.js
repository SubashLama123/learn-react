import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteNote, updateNote } from './notesSlice';

function NoteItem({ note }) {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(note.content);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updateNote({ id: note.id, content }));
    setIsEditing(false);
  };

  return (
    <div className="bg-white shadow p-4 mb-2 rounded-md flex justify-between items-center">
      {isEditing ? (
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border border-gray-300 p-2 rounded-md flex-grow mr-2"
        />
      ) : (
        <span>{note.content}</span>
      )}
      <div className="flex space-x-2">
        {isEditing ? (
          <button
            onClick={handleUpdate}
            className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => dispatch(deleteNote(note.id))}
          className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default NoteItem;
