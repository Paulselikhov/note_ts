import React, { FC } from 'react'
import { INote } from '../types/types';

interface NoteItemProps{
  note: INote;
  addEditNote: (note: INote) => void;
}
const NoteItem: FC<NoteItemProps> = ({note, addEditNote}) => {

  return (
    <div onClick={()=>addEditNote(note)}>
      <div className="NoteItem_name">{note.name}</div> 
      <div className="NoteItem_description">{note.description}</div>
    </div>
  )
}

export default NoteItem