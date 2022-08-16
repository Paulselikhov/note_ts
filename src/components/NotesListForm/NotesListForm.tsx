import React, { FC } from 'react';
import '../../App.css';
import NoteItem from '../NoteForm/NoteItem';
import { INote } from './../types/types';


interface NotesListFormProps{
  items: INote[];
}

const NotesListForm: FC<NotesListFormProps> = ({items}) => {
  return (
    <div className='NotesListForm'>
        <div className='NewNote'>
          <button className='NewNote_button'>+ Новая заметка</button>
        </div>
        {items.map( (item) =>
          <NoteItem note={item}  />
        )}
    </div>
    
  )
}

export default NotesListForm