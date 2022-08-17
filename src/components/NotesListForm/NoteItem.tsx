import React, { FC } from 'react'
import { INote } from '../types/types';

interface NoteItemProps{
  note: INote;
  updateNoteState: (note: INote) => void;
}
const NoteItem: FC<NoteItemProps> = ({note, updateNoteState}) => {

  function cloneAndUpdate(note:INote, updateNoteState: (note: INote) => void){
    updateNoteState({...note})
  }
  return (
    <div className='NoteItem' onClick={ () => cloneAndUpdate(note, updateNoteState)} >
      <div>{note.id}. {note.name}</div> 
      <div>{note.description}</div>
      </div>
  )
}

export default NoteItem