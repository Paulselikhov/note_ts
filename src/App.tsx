import React, { useMemo, useState } from 'react';
import './App.css';
import NoteEditForm from './components/NoteEditForm/NoteEditForm';
import NotesList from './components/NotesListForm/NotesList';
import NotesMenu from './components/NotesMenu/NotesMenu';
import { INote } from './components/types/types';

const NOTE_TEMPLATE = {
  id: 1, name: '', description: '', status: 'pending'
}

function App() {

  // хранит массив заметок
  const [notes, setNotes] = useState<INote[]>([])
  
  // хранит объект заметки
  const [activeNote, setActiveNote] = useState<INote | null>(null)

  // хранит значение инпута, который отвечает за поиск по имени
  const [findState, setFindState] = useState<string>('')
  
  // Функция создания заметки. Создаёт объект на основе константы NOTE_TEMPLATE
  const createNote = () => {
    const newNote = { ...NOTE_TEMPLATE, id: notes.length ? notes[0].id + 1 : 1 }

    // Обновляем состояние "notes" по условию: если в массиве есть элементы, до добавляем объект newNote в начало массива
    setNotes(prev => (
      prev.length ? [{...newNote,},...prev] : [NOTE_TEMPLATE]
    ))
    setActiveNote(newNote) // При добавлении новой заметки мы перемещаем фокус на неё, передавь состояние editNote в компонент NoteEditForm
  }

  // Функция обновления заметки. Принимает параметром объект заметки, итерируется по массиву и для каждого элемента выполняет условие, при котором заметка возвращает старое значение, либо новое
  const updateNote = (note: INote) => {
    const updateNotes = notes.map(item => {
      if (item.id === note.id) {
        return { ...note }
      } else return item
    })
    
    setNotes(updateNotes)
    setActiveNote(note)
  }

  // Функция удаления заметки. Принимает параметром id заметки и фильтрует массив заметок по указанному условию
  const deleteNote = (noteId: number) => {
    setNotes(prev => prev.filter(item => item.id !== noteId))
    setActiveNote(null)
  }

  // Функция поиска заметок по имени. Хук useMemo следит за изменением состояний findState, notes и при их изменении возвращает отсортированный массив
  const searchedNotes = useMemo( () => {
    return notes.filter( note => note.name.toLowerCase().includes(findState))
  }, [findState, notes])
  
  return (
    <div className="App">
      <NotesMenu createNote={createNote} editNoteId={activeNote?.id} deleteNote={deleteNote} findState={findState} setFindState={setFindState} />
      <div className='NoteForm'>
        <NotesList notes={searchedNotes} setActiveNote={setActiveNote} activeNote={activeNote} />
        {activeNote && <NoteEditForm note={activeNote} updateNote={updateNote} />}
      </div>
    </div>
  );
}

export default App;
