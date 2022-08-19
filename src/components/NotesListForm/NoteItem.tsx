import React, { FC, useState } from 'react'
import { INote } from '../types/types';

interface NoteItemProps{
  note: INote;
  setActiveNote: (note: INote) => void;
  activeNote:any;
}
const NoteItem: FC<NoteItemProps> = ({note, setActiveNote, activeNote}) => {
  return (
    <div className={note.status+" "+ (activeNote && note.id == activeNote.id  ? 'active': '')} onClick={ ()=>setActiveNote(note) }>
      <div className="NoteItem_name">{note.name}</div> 
      <div className="NoteItem_description">{note.description}</div>
    </div>
  )
}

export default NoteItem