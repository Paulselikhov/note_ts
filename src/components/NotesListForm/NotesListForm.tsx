import React, { FC } from 'react';
import '../../App.css';
import NoteItem from '../NoteForm/NoteItem';
import { INote } from './../types/types';






interface NotesListFormProps<T>{
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function NotesListForm<T>(props: NotesListFormProps<T>){

  return (
    <div className='NotesListForm'>
        <div className='NewNote'>
          <button className='NewNote_button'>+ Новая заметка</button>
        </div>
        {props.items.map(props.renderItem)}
    </div>
    
  )
}

export default NotesListForm