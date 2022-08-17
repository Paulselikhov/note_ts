import React, { FC } from 'react';
import '../../App.css';
import NoteItem from './NoteItem';
import { INote } from '../types/types';


interface NotesListProps{
  notes: INote[];
  updateNote: (note:INote) => void;
  
}

const NotesList: FC<NotesListProps> = ({notes, updateNote}) => {
  return (
    <div className='NotesList'>
        {notes.map( (item) =>
          <NoteItem note={item} updateNote={updateNote}  />
        )}
    </div>
    
  )
}

export default NotesList