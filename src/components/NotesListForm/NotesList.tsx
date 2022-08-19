import React, { FC } from 'react';
import '../../App.css';
import NoteItem from './NoteItem';
import { INote } from '../types/types';


interface NotesListProps{
  notes: INote[];
  setActiveNote: (note:INote) => void;
  activeNote:INote | null;
}

const NotesList: FC<NotesListProps> = ({notes, setActiveNote, activeNote}) => {
  
  return (
    <div className='NotesList'>
        { notes.length? notes.map((item) =>
            <NoteItem note={item} setActiveNote={setActiveNote} activeNote={activeNote} />
          ): <div>Заметок не найдено</div>}
    </div>
  )
}

export default NotesList