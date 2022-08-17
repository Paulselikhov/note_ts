import React, { FC, useState, useEffect } from 'react';
import '../../App.css';
import { INote } from './../types/types';

interface NoteEditFormProps{
    note: INote;
    updateNoteAndNoteList: (note:INote) => void;
}

const NoteEditForm: FC<NoteEditFormProps> = ({note, updateNoteAndNoteList}) => {
  
  const [nameState, setNameState] = useState('')
  const [descriptionState, setDescriptionState] = useState('')
  
  useEffect( () =>{
    setNameState(note.name)
    setDescriptionState(note.description)
  },[note.id])
  
  function cloneAndUpdate(e:any, note:INote, name:string, updateNoteAndNoteList:(note:INote) => void){

    const cloneItem = {...note}

    if(name == 'название'){
      cloneItem.name = e.target.value;
    }
    if(name == 'описание'){
      cloneItem.description = e.target.value;
    }
    
    updateNoteAndNoteList(cloneItem)
  }
 
  return (
    <div className='NoteEditForm'>
      <input value={nameState} onBlur={ (e) => cloneAndUpdate(e, note, 'название', updateNoteAndNoteList)} onChange={ (e) => setNameState(e.target.value)  }></input>
      <input value={descriptionState} onBlur={ (e) => cloneAndUpdate(e, note, 'описание', updateNoteAndNoteList)} onChange={ (e) => setDescriptionState(e.target.value) }></input>
    </div>
  )
}

export default NoteEditForm