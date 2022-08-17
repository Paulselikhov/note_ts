import React, { FC, useState, useEffect } from 'react';
import '../../App.css';
import { INote } from './../types/types';

interface NoteEditFormProps{
    note: INote;
    updateNoteState: (note:INote) => void;
}

const NoteEditForm: FC<NoteEditFormProps> = ({note, updateNoteState}) => {
  
  const [nameState, setNameState] = useState('')
  const [descriptionState, setDescriptionState] = useState('')
  
  useEffect( () =>{
    setNameState(note.name)
    setDescriptionState(note.description)
  },[note.id])
  
  function updateNote(e:any, note:INote, name:string, updateNoteState:(note:INote) => void){

    const cloneItem = {...note}

    if(name == 'название'){
      cloneItem.name = e.target.value;
    }
    if(name == 'описание'){
      cloneItem.description = e.target.value;
    }
    
    console.log('Сработала функция updatNote')
    updateNoteState(cloneItem)
  }
  console.log('Сработал рендер всей компоненты')
  return (
    <div className='NoteEditForm'>
      <input value={nameState} onBlur={ (e) => updateNote(e, note, 'название', updateNoteState)} onChange={ (e) => setNameState(e.target.value)  }></input>
      <input value={descriptionState} onBlur={ (e) => updateNote(e, note, 'описание', updateNoteState)} onChange={ (e) => setDescriptionState(e.target.value) }></input>
    </div>
  )
}

export default NoteEditForm