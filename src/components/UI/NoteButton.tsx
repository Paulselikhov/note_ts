import React, { FC } from 'react'
import { INote } from './../types/types';

interface NoteButtonProps{
    noteFunc: (note:INote) => void;
    children: string;
    note: INote;
}

const NoteButton: FC<NoteButtonProps> = ({noteFunc, children, note}) => {
  return (
    <button onClick={ () => noteFunc(note)} className='Note_button'>{children}</button>
  )
}

export default NoteButton