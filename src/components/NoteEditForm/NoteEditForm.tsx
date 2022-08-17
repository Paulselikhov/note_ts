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
    if (note){
      setNameState(note.name)
      setDescriptionState(note.description)
    }
    
  },[note])
  
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
      {note?
        <div className='NoteEditForm_found' >
          <input value={nameState} onBlur={ (e) => cloneAndUpdate(e, note, 'название', updateNoteAndNoteList)} onChange={ (e) => setNameState(e.target.value)} className='NoteEditForm_inputName' placeholder='Введите название заметки'></input>
          <textarea value={descriptionState} onBlur={ (e) => cloneAndUpdate(e, note, 'описание', updateNoteAndNoteList)} onChange={ (e) => setDescriptionState(e.target.value)} className='NoteEditForm_inputDescription' placeholder='Введите описание заметки'></textarea>
      </div>
      :<div className='NoteEditForm_notFound'> Заметок не найдено</div>
      }
      
      
    </div>
  )
}

export default NoteEditForm