import React, { FC } from 'react';
import '../../App.css';
import { INote } from './../types/types';

interface NoteEditFormProps{
    item: INote;
}

const NoteEditForm: FC<NoteEditFormProps> = ({item}) => {
  return (
    <div className='NoteEditForm'>
      <div>{item.name}</div>
      <div>{item.description}</div>
    </div>
  )
}

export default NoteEditForm