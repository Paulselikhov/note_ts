import React, { FC } from 'react';
import '../../App.css';

interface NoteFormProps{
    className?: string;
}

const NoteForm: FC<NoteFormProps> = () => {
  return (
    <div className='NoteForm'>
      <div className='DeleteNote'>
        <button>Удалить</button>
      </div>
      <div>Окно редактирования</div>
    </div>
  )
}

export default NoteForm