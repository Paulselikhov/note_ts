import React, {useState} from 'react';
import './App.css';
import NoteForm from './components/NoteForm/NoteForm';
import NoteItem from './components/NoteForm/NoteItem';
import NotesListForm from './components/NotesListForm/NotesListForm';
import { INote } from './components/types/types';



function App() {

  const [note, setNote] = useState<INote[]>([
    {id: 1, name: 'Первая заметка', description: 'Описание заметки', status: 'pending'},
    {id: 2, name: 'Первая заметка', description: 'Описание заметки', status: 'pending'}
  ]);

  return (
    <div className="App">
          <NotesListForm items={note} />
          <NoteForm />
    </div>
  );
}

export default App;
