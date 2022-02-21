import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectLoadingModal
} from '../../features/note/noteSlice';
import { Dialog } from 'primereact/dialog';
import './LoadingModal.css';

function LoadingModal() {
  const displayLoadingModal = useSelector(selectLoadingModal);
  return (
    <Dialog 
      header="Cargando" 
      visible={displayLoadingModal} 
      style={{ width: '50vw' }} 
      breakpoints={{'960px': '85vw'}}
      closable={false}
    >
      <i className="pi pi-spin pi-spinner" style={{'fontSize': '2em'}}></i>
    </Dialog>
  );
}


export default LoadingModal;