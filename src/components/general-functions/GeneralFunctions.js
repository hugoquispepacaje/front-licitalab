import React, { useState} from 'react';
import './GeneralFunctions.css';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { useSelector, useDispatch } from 'react-redux';
import Constantes from '../../utiles/Constantes';
import {
  selectNotesSelected,
  completeNotesAsync,
  changeNoteOrder,
  selectNoteOrder
} from '../../features/note/noteSlice';

function GeneralFunctions() {
  const notesSelected = useSelector(selectNotesSelected);
  const order = useSelector(selectNoteOrder);
  const ordenOptions = [{
    name: 'Defecto',
    code: Constantes.ORDER_DEFAULT
  },
  {
    name: 'Creación',
    code: Constantes.ORDER_CREATE
  },
  {
    name: 'Vencimiento',
    code: Constantes.ORDER_EXPIRED
  },
  {
    name: 'Estado',
    code: Constantes.ORDER_STATE
  }];
  const onFilterChange = (e) => {
    dispatch(changeNoteOrder(e.value));
  }
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
        <Dropdown value={order} options={ordenOptions} onChange={onFilterChange} optionLabel="name" placeholder="Orden" />
      </div>
    </div>
  );
}

export default GeneralFunctions;