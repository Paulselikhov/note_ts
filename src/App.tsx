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

  // Функция обновления состояний
  function updateNoteAndNoteList(value:INote){
    
    setNote(value)
    updateNotes(value)
  }

  function updateNote(value:INote){
    setNote(value)
  }

  // Функция получения клона массива объектов из состояния "notes"
  function getClone(){

    const notesClone:INote[] = []
    notes.forEach( (item) => {
      notesClone.push({...item})
    })

    return notesClone
  }

  // Функция обновления заметок: проходится циклом по клонированному массиву, сравнивает id и если id равны - присвает свойствам  клонированного массива новые значения, после чего обновляет состояние "notes"
  function updateNotes(value:INote){

    const notesClone = getClone()

    notesClone.forEach( (item) => {
      if(item.id == value.id){
        item.name = value.name
        item.description = value.description
      }
    })

    setNotes(notesClone)
  }

  // Функция добавления заметки: создаёт новый объект типа INote и добавляет его в клонированный массив, после чего обновляет состояние "notes"
  function newNote(){

    const notesClone = getClone()
    const newItem: INote = {
        id: ++(notes[0].id),
        name: '',
        description: '',
        status: 'pending'
    }

    notesClone.unshift(newItem)

    setNote(newItem)
    setNotes(notesClone)
  }

  // Функция удаления заметки: проходится циклом по клонированному массиву, сравнивает id и если id равны - удаляет объект, после чего обновляет состояние "notes"
  function deleteNote(note: INote){

    const notesClone = getClone()

    if(notesClone[1]){
      for (let i=0; i<=notesClone.length-1; i++){
        if (notesClone[i].id == note.id){
          notesClone.splice(i, 1)
          setNote(notesClone[i])
        }
      }

      setNotes(notesClone)
    } 
  }

  

  return (
    <div className="App">
          <div className='Head'>
            <div className='addNote'>
              <button onClick={ () => newNote()} className='addNote_button'>+ Новая заметка</button>
            </div>
            <div className='DeleteNote'>
              <button onClick={ () => deleteNote(note)}>Удалить</button>
            </div>
          </div>
          <div className='Content'>
            
                <NotesList notes={notes} updateNote={updateNote} />
                
                <NoteEditForm updateNoteAndNoteList={updateNoteAndNoteList} note={note}  />
          </div>
          
    </div>
  );
}

export default App;
