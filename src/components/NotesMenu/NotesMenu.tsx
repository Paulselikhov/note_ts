import React,{ FC } from 'react'
import NoteButton from '../UI/NoteButton';
import { INote } from './../types/types';

interface NotesMenuProps{
    newNote: (note:INote) => void;
    deleteNote: (note:INote) => void;
    setFindState: (value: string) => void;
    findState: string;
    note: INote;
}

const NotesMenu: FC<NotesMenuProps> = ({newNote, deleteNote, findState, setFindState, note}) => {
  return (
    <div className='NotesMenu'>
        <div className='addNote'>
            <NoteButton noteFunc={newNote} note={note}>+ Новая заметка</NoteButton>
        </div>
        <div className='DeleteNote'>
            <NoteButton noteFunc={deleteNote} note={note}>Удалить</NoteButton>
        </div>
        <div className='FindNote'>
            <input value={findState} onChange={ (e) => setFindState(e.target.value)} placeholder='Поиск по названию' className='FindNote_input'/>
        </div>
    </div>
  )
}

export default NotesMenu