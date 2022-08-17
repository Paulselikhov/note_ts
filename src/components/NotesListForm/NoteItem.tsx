import React, { FC } from 'react'
import { INote } from '../types/types';

interface NoteItemProps{
  note: INote;
  updateNote: (note: INote) => void;
}
const NoteItem: FC<NoteItemProps> = ({note, updateNote}) => {

  function cloneAndUpdate(note:INote, updateNote: (note: INote) => void){
    updateNote({...note})
  }
  return (
    <div className='NoteItem' onClick={ () => cloneAndUpdate(note, updateNote)} >
      <div>{note.id}. {note.name}</div> 
      <div>{note.description}</div>
      </div>
  )
}

export default NoteItem