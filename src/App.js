import React from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-6">Notes App</h1>
      <NoteForm />
      <NoteList />
    </div>
  );
}

export default App;
