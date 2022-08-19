import React, { FC, useState, useEffect } from 'react';
import '../../App.css';
import NoteItem from './NoteItem';
import { INote } from '../types/types';


interface NotesListProps{
  notes: INote[];
  addEditNote: (note:INote) => void;
}

const NotesList: FC<NotesListProps> = ({notes, addEditNote, }) => {
  return (
    <div className='NotesList'>
        { notes.length? notes.map((item) =>
            <NoteItem note={item} addEditNote={addEditNote} />
          ): <div>Заметок не найдено</div>}
    </div>
  )
}

export default NotesList