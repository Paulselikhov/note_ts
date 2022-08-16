import React, {useState} from 'react';
import './App.css';
import NoteEditForm from './components/NoteEditForm/NoteEditForm';
import NotesList from './components/NotesListForm/NotesList';
import { INote } from './components/types/types';



function App() {

  const [notes, setNotes] = useState<INote[]>([
    {id: 1, name: 'Первая заметка', description: 'Описание заметки', status: 'pending'},
    {id: 2, name: 'Вторая заметка', description: 'Описание заметки', status: 'pending'}
  ]);


  const [note, setNote] = useState<INote>(notes[0]);

  function updateNoteState(note:INote){
    setNote(note);
  }

  return (
    <div className="App">
          <div className='Head'>
            <div className='NewNote'>
              <button className='NewNote_button'>+ Новая заметка</button>
            </div>
            <div className='DeleteNote'>
              <button>Удалить</button>
            </div>
          </div>
          <div className='Content'>
            <NotesList items={notes} updateNoteState={updateNoteState} />
            <NoteEditForm item={note}  />
          </div>
          
    </div>
  );
}

export default App;
