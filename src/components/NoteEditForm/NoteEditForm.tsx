import React, { FC, useState, useEffect } from 'react';
import '../../App.css';
import { INote } from './../types/types';

interface NoteEditFormProps{
    item: INote;
    updateNoteState: (note:INote) => void;
}

const NoteEditForm: FC<NoteEditFormProps> = ({item, updateNoteState}) => {
  console.log(item.name)
  const [nameState, setNameState] = useState('')
  const [descriptionState, setDescriptionState] = useState('')
  
  useEffect( () =>{
    setNameState(item.name)
    setDescriptionState(item.description)
  },[item.name])
  
  function updateNote(e:any, myitem:INote, updateNoteState:(note:INote) => void){
    myitem.name = e.target.value;
    console.log('myitem')
    console.log('Сработала функция updatNote')
    updateNoteState(myitem)
  }
  console.log('Сработал рендер всей компоненты')
  return (
    <div className='NoteEditForm'>
      <input value={nameState} onBlur={ (e) => updateNote(e, item, updateNoteState)} onChange={ (e) => setNameState(e.target.value)  }></input>
      <input value={descriptionState} onBlur={ (e) => updateNote(e, item, updateNoteState)} onChange={ (e) => setDescriptionState(e.target.value) }></input>
    </div>
  )
}

export default NoteEditForm