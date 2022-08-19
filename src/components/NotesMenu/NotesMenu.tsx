import React, { FC } from 'react'
import NoteButton from '../UI/NoteButton';
import { INote } from './../types/types';

interface NotesMenuProps {
    createNote: () => void;
    deleteNote: (noteId: number) => void;
    setFindState: (value: string) => void;
    findState: string;
    note?: INote;
    editNoteId: number | undefined;

}

const NotesMenu: FC<NotesMenuProps> = ({ createNote, editNoteId, deleteNote ,findState, setFindState }) => {
    return (
        <div className='NotesMenu'>
            <div className='addNote'>
                {/* <NoteButton noteFunc={newNote} note={note}>+ Новая заметка</NoteButton> */}
                <button onClick={createNote}>Добавить</button>
            </div>
            <br />
            <div className='DeleteNote'>
                {/* <NoteButton noteFunc={deleteNote} note={note}>Удалить</NoteButton> */}
                {editNoteId && <button onClick={() => deleteNote(editNoteId)}>Удалить</button>}
            </div>
            <div className='FindNote'>
            <input value={findState} onChange={ (e) => setFindState(e.target.value)} placeholder='Поиск по названию' className='FindNote_input'/>
            </div>
        </div>
    )
}

export default NotesMenu