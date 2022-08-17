import React, { FC, useState, useEffect } from 'react';
import '../../App.css';
import { INote } from './../types/types';

interface NoteEditFormProps{
    note: INote;
    updateNoteAndNoteList: (note:INote) => void;
    searchedNotes: INote[];
}

const NoteEditForm: FC<NoteEditFormProps> = ({note, updateNoteAndNoteList, searchedNotes}) => {
  
  const [nameState, setNameState] = useState('')
  const [descriptionState, setDescriptionState] = useState('')
  const [status, setStatus] = useState('')
  
  useEffect( () =>{
    
    if (note){
      setNameState(note.name)
      setDescriptionState(note.description)
      setStatus(note.status)
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
    if(name == 'статус'){
      cloneItem.status = e.target.value;
    }
    
    updateNoteAndNoteList(cloneItem)
  }
    
  return (
    <div className='NoteEditForm'>
      {searchedNotes[0]?
        <div className='NoteEditForm_found' >
          <div className='NoteEditForm_head'>
            <input value={nameState} onBlur={ (e) => cloneAndUpdate(e, note, 'название', updateNoteAndNoteList)} onChange={ (e) => setNameState(e.target.value)} className='NoteEditForm_inputName' placeholder='Введите название заметки'></input>
            <select value={status} onChange={ (e) => {setStatus(e.target.value); cloneAndUpdate(e, note, 'статус', updateNoteAndNoteList)}}  className='NoteEditForm_select'>
              <option value='pending'>Ожидает</option>
              <option value='inProcess'>В процессе</option>
              <option value='resolved'>Выполнена</option>
            </select>
          </div>
          
          <textarea value={descriptionState} onBlur={ (e) => cloneAndUpdate(e, note, 'описание', updateNoteAndNoteList)} onChange={ (e) => setDescriptionState(e.target.value)} className='NoteEditForm_inputDescription' placeholder='Введите описание заметки'></textarea>
      </div>
      :<div className='NoteEditForm_notFound'> Заметок не найдено</div>
      }
      
      
    </div>
  )
}

export default NoteEditForm