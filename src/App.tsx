import React, {useMemo, useState} from 'react';
import './App.css';
import NoteEditForm from './components/NoteEditForm/NoteEditForm';
import NotesList from './components/NotesListForm/NotesList';
import NotesMenu from './components/NotesMenu/NotesMenu';
import { INote } from './components/types/types';



function App() {

  const nullNote: INote = {id: 0, name: '', description: '', status: 'pending'}

  // хранит объект заметок
  const [notes, setNotes] = useState<INote[]>([nullNote]);

  // хранит объект заметки
  const [note, setNote] = useState<INote>({...notes[0]});

  // хранит id заметки, которая выбрана
  const [activeId, setActiveId] = useState<number>(0)

  // хранит значение инпута, который отвечает за поиск по имени
  const [findState, setFindState] = useState<string>('')

  // Функция обновления состояния заметок
  function updateNoteAndNoteList(value:INote){
    setNote(value)
    updateNotes(value)
  }

  // Функция обновления состояния заметки
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
        item.status = value.status
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
    setActiveId(newItem.id)
    setNotes(notesClone)
  }

  // Функция удаления заметки: проходится циклом по клонированному массиву, сравнивает id и если id равны - удаляет объект, после чего обновляет состояние "notes"
  function deleteNote(note: INote){

    const notesClone = getClone()

    if(notesClone[1]){
      for (let i=0; i<=notesClone.length-1; i++){
        if (notesClone[i].id == note.id){
          notesClone.splice(i, 1)
          setNote(notesClone[0])
          setActiveId(notesClone[0].id)
        }
      }
      setNotes(notesClone)
    } else{
      notesClone[0] = nullNote
      setNote(nullNote)
      setNotes(notesClone)
    }
  }

  // Функция поиска заметок по имени. Хук useMemo следит за изменением состояний findState, notes и при их изменении возвращает отсортированный массив
  const searchedNotes = useMemo( () => {
    return notes.filter( note => note.name.toLowerCase().includes(findState))
  }, [findState, notes])

  
  return (
    <div className="App">
          <NotesMenu newNote={newNote} deleteNote={deleteNote} note={note} findState={findState} setFindState={setFindState} />
          <div className='NoteForm'>
              <NotesList notes={searchedNotes} updateNote={updateNote} setActiveId={setActiveId} activeId={activeId} />
              <NoteEditForm searchedNotes={searchedNotes} updateNoteAndNoteList={updateNoteAndNoteList} note={note}  />
          </div>  
    </div>
  );
}

export default App;
