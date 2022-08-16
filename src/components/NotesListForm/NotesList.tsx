import React, { FC } from 'react';
import '../../App.css';
import NoteItem from './NoteItem';
import { INote } from '../types/types';


interface NotesListProps{
  items: INote[];
  updateNoteState: (note:INote) => void;
  
}

const NotesList: FC<NotesListProps> = ({items, updateNoteState}) => {
  return (
    <div className='NotesList'>
        {items.map( (item) =>
          <NoteItem note={item} updateNoteState={updateNoteState}  />
        )}
    </div>
    
  )
}

export default NotesList