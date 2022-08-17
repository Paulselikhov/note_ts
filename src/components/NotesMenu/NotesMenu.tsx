import React,{ FC } from 'react'
import { INote } from './../types/types';

interface NotesMenuProps{
    newNote: () => void;
    deleteNote: (note:INote) => void;
    setFindState: (value: string) => void;
    findState: string;
    note: INote;
}

const NotesMenu: FC<NotesMenuProps> = ({newNote, deleteNote, findState, setFindState, note}) => {
  return (
    <div className='NotesMenu'>
        <div className='addNote'>
            <button onClick={ () => newNote()} className='addNote_button'>+ Новая заметка</button>
        </div>
        <div className='DeleteNote'>
            <button onClick={ () => deleteNote(note)} className='DeleteNote_button'>Удалить</button>
        </div>
        <div className='FindNote'>
            <input value={findState} onChange={ (e) => setFindState(e.target.value)} placeholder='Поиск по названию' className='FindNote_input'/>
        </div>
    </div>
  )
}

export default NotesMenu