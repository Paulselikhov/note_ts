import React, { FC } from 'react'
import { INote } from '../types/types';

interface NoteItemProps{
  note: INote;
  updateNote: (note: INote) => void;
  setActiveId: any;
  activeId: any;
}
const NoteItem: FC<NoteItemProps> = ({note, updateNote, setActiveId,activeId}) => {

  let className:string = ''

  function setColors(){
    if (activeId == note.id){
      className = "NoteItem active"
    }else if (note.status == "inProcess"){
      className= className + " " + "NoteItem inProcess"
    }else if (note.status == "resolved"){
      className= className + " " + "NoteItem resolved"
    }else if (note.status == "pending"){
      className= className + " " + "NoteItem pending"
    }
  }
  setColors()
  
  function updateAndSetColor(note:INote, updateNote: (note: INote) => void){
    updateNote({...note})
    setActiveId(note.id)
  }

  return (
    <div className={className} onClick={ () => updateAndSetColor(note, updateNote)} >
      <div className="NoteItem_name">{note.name}</div> 
      <div className="NoteItem_description">{note.description}</div>
    </div>
  )
}

export default NoteItem