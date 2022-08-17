import React, {useState} from 'react';
import './App.css';
import NoteEditForm from './components/NoteEditForm/NoteEditForm';
import NotesList from './components/NotesListForm/NotesList';
import { INote } from './components/types/types';



function App() {

  const [notes, setNotes] = useState<INote[]>([
    {id: 2, name: 'Вторая заметка', description: 'Описание заметки', status: 'pending'},
    {id: 1, name: 'Первая заметка', description: 'Описание заметки', status: 'pending'}
  ]);
  

  const [note, setNote] = useState<INote>({...notes[0]});

  console.log(notes)
  function updateNote(value:INote){
    
    setNote(value);
    
    updateNotes(value)
  }

  function updateNotes(value:INote){

    const notesClone:INote[] = []
    notes.forEach( (item) => {
      notesClone.push({...item})
    })

    notesClone.forEach( (item) => {
      if(item.id == value.id){
        item.name = value.name
        item.description = value.description
      }
    })
    setNotes(notesClone)
  
  }

  function newNote(){

    const notesClone:INote[] = []
    notes.forEach( (item) => {
      notesClone.push({...item})
    })

    const newItem: INote = {
        id: 1,
        name: '',
        description: '',
        status: 'pending'
    }

    if(notesClone[0]){
      newItem.id = ++(notes[0].id)
    } 

    notesClone.unshift(newItem)

    setNote(newItem)
    setNotes(notesClone)
  }

  function deleteNote(note: INote){

    const notesClone:INote[] = []
    notes.forEach( (item) => {
      notesClone.push({...item})
    })

    for (let i=0; i<=notesClone.length-1; i++){
      if (notesClone[i].id == note.id){
        notesClone.splice(i, 1)
        setNote(notesClone[i])
      }
    }

    
    setNotes(notesClone)
  }

  

  return (
    <div className="App">
          <div className='Head'>
            <div className='NewNote'>
              <button onClick={ () => newNote()} className='NewNote_button'>+ Новая заметка</button>
            </div>
            <div className='DeleteNote'>
              <button onClick={ () => deleteNote(note)}>Удалить</button>
            </div>
          </div>
          <div className='Content'>
            { (notes[0])?
                <NotesList notes={notes} updateNote={updateNote} />
                : <div> Элемент отсутствует</div>
            }
            { (notes[0])?
                <NoteEditForm updateNote={updateNote} note={note}  />
                : <div> Элемент отсутствует</div>
            }
                
                
            
            
          </div>
          
    </div>
  );
}

export default App;
