import React, { FC } from 'react';
import '../../App.css';
import NoteItem from './NoteItem';
import { INote } from '../types/types';


interface NotesListProps{
  notes: INote[];
  updateNoteState: (note:INote) => void;
  
}

const NotesList: FC<NotesListProps> = ({notes, updateNoteState}) => {
  return (
    <div className='NotesList'>
        {notes.map( (item) =>
          <NoteItem note={item} updateNoteState={updateNoteState}  />
        )}
    </div>
    
  )
}

export default NotesList