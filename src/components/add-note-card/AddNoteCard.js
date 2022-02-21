import React from 'react';
import './AddNoteCard.css';
import { useDispatch } from 'react-redux';
import {
  openCreateNoteModal
} from '../../features/modal/modalSlice';
import { Button } from 'primereact/button';

function AddNoteCard() {
  const dispatch = useDispatch();
  return (
    <div className="ancard-container">
      <Button icon="pi pi-plus" className="p-button-text p-button-plain ancard-button-custom" onClick={() => dispatch(openCreateNoteModal())}/>
    </div>
  );
}

export default AddNoteCard;