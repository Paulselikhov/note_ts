import React, { FC } from 'react'
import { INote } from '../types/types';

interface NoteItemProps{
  note: INote;
  updateNoteState: (note: INote) => void;
}
const NoteItem: FC<NoteItemProps> = ({note, updateNoteState}) => {
  return (
    <div className='NoteItem' onClick={ () => updateNoteState(note)} >
      <div>{note.id}. {note.name}</div> 
      <div>{note.description}</div>
      </div>
  )
}

export default NoteItem