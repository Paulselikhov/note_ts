import React, { FC } from 'react'
import { INote } from '../types/types';

interface NoteItemProps{
  note: INote;
  updateNote: (note: INote) => void;
  setActiveId: any;
  activeId: any;
}
const NoteItem: FC<NoteItemProps> = ({note, updateNote, setActiveId,activeId}) => {

  
  function updateAndSetColor(note:INote, updateNote: (note: INote) => void){
    updateNote({...note})
    setColor()
  }

  function setColor(){
    setActiveId(note.id)
  }

  return (
    <div className={activeId == note.id? "NoteItem active": "NoteItem"} onClick={ () => updateAndSetColor(note, updateNote)} >
      <div className="NoteItem_name">{note.name}</div> 
      <div className="NoteItem_description">{note.description}</div>
    </div>
  )
}

export default NoteItem