import React from 'react';
import './GeneralFunctions.css';
import { Button } from 'primereact/button';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectNotesSelected,
  completeNotesAsync
} from '../../features/note/noteSlice';

function GeneralFunctions() {
  const notesSelected = useSelector(selectNotesSelected);
  const dispatch = useDispatch();
  const completarTareas = () => {
    dispatch(completeNotesAsync(notesSelected));
  }
  return (
    <div className="gf-container">
      <div>
        <Button label="Liberar seleccionadas" className="p-button-sm" onClick={()=>completarTareas()}/>
      </div>
      <div>
        <Button icon="pi pi-filter-fill" className="p-button-rounded p-button-text p-button-plain" />
        <Button label="Ordenar" className="p-button-sm"/>
      </div>
    </div>
  );
}

export default GeneralFunctions;