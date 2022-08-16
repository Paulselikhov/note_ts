import React, { FC } from 'react'
import { INote } from './../types/types';

interface NoteItemProps{
  note: INote;
}
const NoteItem: FC<NoteItemProps> = ({note}) => {
  return (
    <div >{note.id}. {note.name} {note.description}</div>
  )
}

export default NoteItem