import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  closeNoteModal,
  selectNoteModal,
  selectNote,
  selectModeNoteModal
} from '../../features/modal/modalSlice';
import { createNoteAsync, updateNoteAsync } from '../../features/note/noteSlice';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import './AddNoteModal.css';
import FormAddNoteModal from './form-add-note-modal/FormAddNoteModal';
import Constantes from '../../utiles/Constantes';

function AddNoteModal() {
  const formularioInicial = {
    id:'',
    descripcion: '',
    fechaVencimiento: ''
  }
  const displayNoteModal = useSelector(selectNoteModal);
  const note = useSelector(selectNote);
  const mode = useSelector(selectModeNoteModal);
  const dispatch = useDispatch();
  const [formulario, setFormulario] = useState(formularioInicial);
  const actualizarFormulario = () =>{
    setFormulario({
      id:note.id,
      descripcion: note.descripcion,
      fechaVencimiento: note.fechaVencimiento === ''? '': new Date(note.fechaVencimiento)
    });
  }
  const onHide = () => {
    dispatch(closeNoteModal());
  }
  const addNote = () => {
    let note = {
      descripcion: formulario.descripcion,
      fecha_creacion: new Date(),
      fecha_vencimiento: formulario.fechaVencimiento,
      is_complete: false
    }
    dispatch(createNoteAsync(note));
    onHide();
  }
  const updateNote = () => {
    let note = {
      id: formulario.id,
      note: {
        descripcion: formulario.descripcion,
        fecha_vencimiento: formulario.fechaVencimiento,
      }
    }
    dispatch(updateNoteAsync(note));
    onHide();
  }
  useEffect(() => {
    actualizarFormulario();
  }, [note]);

  const renderFooter = () => {
    return (
        <div>
            <Button label="Volver" icon="pi pi-times" onClick={() => onHide()} className="p-button-text" />
            {mode===Constantes.MODE_CREATE?
              <Button label="Agregar" icon="pi pi-check" onClick={() => addNote()} autoFocus />:
              <Button label="Actualizar" icon="pi pi-check" onClick={() => updateNote()} autoFocus />
            }
        </div>
    );
  }
  return (
    <Dialog 
      header={mode===Constantes.MODE_CREATE?"Agregar Nota":"Actualizar Nota"}
      visible={displayNoteModal} 
      style={{ width: '50vw' }} 
      breakpoints={{'960px': '85vw'}} 
      footer={renderFooter()} 
      onHide={() => onHide()}
    >
      <FormAddNoteModal 
        formulario={formulario} 
        setFormulario={setFormulario}
      />
    </Dialog>
  );
}

export default AddNoteModal;