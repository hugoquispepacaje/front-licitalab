import { createSlice } from '@reduxjs/toolkit';
import Constantes from '../../utiles/Constantes';

const initialState = {
  noteModal: Constantes.INACTIVE,
  modeNoteModal:Constantes.MODE_CREATE, 
  note: {
    id: '',
    descripcion: '',
    fechaVencimiento: ''
  }
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openCreateNoteModal: (state) => {
      state.note = {
        id:'',
        descripcion: '',
        fechaVencimiento: '',
      }
      state.modeNoteModal = Constantes.MODE_CREATE;
      state.noteModal = Constantes.ACTIVE;
    },
    openUpdateNoteModal: (state, action) => {
      state.note = {
        id: action.payload.id,
        descripcion: action.payload.descripcion,
        fechaVencimiento: action.payload.fechaVencimiento
      }
      state.modeNoteModal = Constantes.MODE_UPDATE;
      state.noteModal = Constantes.ACTIVE;
    },
    closeNoteModal: (state) => {
      state.noteModal = Constantes.INACTIVE;
    }
  },
});

export const { openCreateNoteModal, openUpdateNoteModal, closeNoteModal  } = modalSlice.actions;

export const selectNoteModal = (state) => state.modal.noteModal;

export const selectNote = (state) => state.modal.note;

export const selectModeNoteModal = (state) => state.modal.modeNoteModal;

export default modalSlice.reducer;