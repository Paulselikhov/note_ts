import React, { FC, useState, useEffect } from 'react';
import '../../App.css';
import NoteItem from './NoteItem';
import { INote } from '../types/types';


interface NotesListProps{
  notes: INote[];
  updateNote: (note:INote) => void;
  activeId: number;
  setActiveId: (num: number) => void;
  
}

const NotesList: FC<NotesListProps> = ({notes, updateNote, activeId, setActiveId, }) => {

  
  return (
    <div className='NotesList'>
        {notes.map( (item) =>
          <NoteItem note={item} updateNote={updateNote} setActiveId={setActiveId} activeId={activeId}  />
        )}
    </div>
    
  )
}

export default NotesList