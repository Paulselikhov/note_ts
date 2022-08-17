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


  const [note, setNote] = useState<INote>({...notes[0]});

  function test(){
    console.log(note)
  }

  function updateNoteState(value:INote){
    
    const notesClone:INote[] = []
    notes.forEach( (item) => {
      notesClone.push({...item})
    })

    console.log('сработала функция updateNoteState ')
    setNote(value);
    
    updateNotesState(value, notesClone)
  }

  function updateNotesState(value:INote, notesClone:INote[]){
    console.log(value)
    notesClone.forEach( (item) => {
      if(item.id == value.id){
        item.name = value.name
        item.description = value.description
      }
    })
    setNotes(notesClone)
  
  }

  

  return (
    <div className="App">
          <div className='Head'>
            <div className='NewNote'>
              <button onClick={ () => test()} className='NewNote_button'>+ Новая заметка</button>
            </div>
            <div className='DeleteNote'>
              <button>Удалить</button>
            </div>
          </div>
          <div className='Content'>
            <NotesList notes={notes} updateNoteState={updateNoteState} />
            <NoteEditForm updateNoteState={updateNoteState} note={note}  />
          </div>
          
    </div>
  );
}

export default App;
