import React, { FC, useState, useEffect } from 'react';
import '../../App.css';
import { INote } from './../types/types';

interface NoteEditFormProps{
    note: INote;
    updateNote: (note:INote) => void;
}

const NoteEditForm: FC<NoteEditFormProps> = ({note, updateNote}) => {
  
  const [nameState, setNameState] = useState('')
  const [descriptionState, setDescriptionState] = useState('')
  
  useEffect( () =>{
    setNameState(note.name)
    setDescriptionState(note.description)
  },[note.id])
  
  function cloneAndUpdate(e:any, note:INote, name:string, updateNote:(note:INote) => void){

    const cloneItem = {...note}

    if(name == 'название'){
      cloneItem.name = e.target.value;
    }
    if(name == 'описание'){
      cloneItem.description = e.target.value;
    }
    
    updateNote(cloneItem)
  }
 
  return (
    <div className='NoteEditForm'>
      <input value={nameState} onBlur={ (e) => cloneAndUpdate(e, note, 'название', updateNote)} onChange={ (e) => setNameState(e.target.value)  }></input>
      <input value={descriptionState} onBlur={ (e) => cloneAndUpdate(e, note, 'описание', updateNote)} onChange={ (e) => setDescriptionState(e.target.value) }></input>
    </div>
  )
}

export default NoteEditForm