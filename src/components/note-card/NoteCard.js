import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteNoteAsync,
} from '../../features/note/noteSlice';
import {
  openUpdateNoteModal
} from '../../features/modal/modalSlice';
import { Checkbox } from 'primereact/checkbox';
import Utiles from '../../utiles/Utiles';
import './NoteCard.css';
import { Button } from 'primereact/button';

function NoteCard({note, addNoteSelected, removeNoteSelected}) {
  const dispatch = useDispatch();
  const [checked, setChecked]= useState(false);
  const {
    id,
    descripcion, 
    fecha_vencimiento:fechaVencimiento,
    is_complete:isComplete
  } = note;
  let stateIcon;
  let cardColor;
  if(isComplete){
    stateIcon='pi pi-check-circle';
    cardColor='complete';
  }
  else if(Utiles.isDateExpired(fechaVencimiento)){
    stateIcon='pi pi-times-circle';
    cardColor='expired';
  }
  else{
    stateIcon='pi pi-clock';
    cardColor='pending';
  }
  useEffect(() => {
    setChecked(false);
  }, [isComplete]);
  const changeChecked = (value)=>{
    setChecked(value);
    if(value){
      addNoteSelected(id);
    }else{
      removeNoteSelected(id);
    }
  }
  
  const deleteNote = ()=>{
    dispatch(deleteNoteAsync(id));
  }

  const updateNote = ()=>{
    dispatch(openUpdateNoteModal({
      id,
      descripcion,
      fechaVencimiento
    }))
  }

  return (
    <div className={`ncard-container card-color-${cardColor}`}>
      <div className='ncard-description'>
        <h3>{descripcion}</h3>
      </div>
      <div className="ncard-functions-container">
        <div className="ncard-functions-left">
          <Checkbox inputId="selected" disabled={isComplete} checked={checked} onChange={e => changeChecked(e.checked)} />
        </div>
        <div className="ncard-functions-right">
          <h3>{Utiles.dateToString(fechaVencimiento)}</h3>
          <i className="pi pi-calendar" style={{'fontSize': '2em'}}></i>
          <i className={stateIcon} style={{'fontSize': '2em'}}></i>
        </div>
      </div>
      <div className="ncard-actions-container">
        <Button 
          icon="pi pi-pencil" 
          className="p-button-rounded p-button-info p-button-sm" 
          onClick={()=>updateNote()}
        />
        <Button 
          icon="pi pi-trash" 
          className="p-button-rounded p-button-danger p-button-sm" 
          onClick={()=>deleteNote()}
        />
      </div>
    </div>
  );
}

export default NoteCard;