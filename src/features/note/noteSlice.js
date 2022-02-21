import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import noteApi from '../../service/note';
import Constantes from '../../utiles/Constantes';

const initialState = {
  notes: [],
  loadingModal: false,
  notesSelected: [],
  noteOrder: Constantes.ORDER_DEFAULT
};

export const getNotesAsync = createAsyncThunk(
  'note/getNotes',
  async () => {
    const response = await noteApi.getNotes();
    return response.data;
  }
);

export const createNoteAsync = createAsyncThunk(
  'note/createNote',
  async (note) => {
    await noteApi.createNote(note);
    const response = await noteApi.getNotes();
    return response.data;
  }
);

export const updateNoteAsync = createAsyncThunk(
  'note/updateNote',
  async (note) => {
    await noteApi.updateNote(note.id, note.note);
    const response = await noteApi.getNotes();
    return response.data;
  }
);

export const deleteNoteAsync = createAsyncThunk(
  'note/deleteNote',
  async (id) => {
    await noteApi.deleteNote(id);
    const response = await noteApi.getNotes();
    return response.data;
  }
);

export const completeNotesAsync = createAsyncThunk(
  'note/completeNotes',
  async (idNotes) => {
    for( let idNote of idNotes){
      await noteApi.updateNote(idNote, { is_complete : true });
    }
    const response = await noteApi.getNotes();
    return response.data;
  }
);

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    changeNotesSelected: (state, action) => {
      state.notesSelected = action.payload;
    },
    changeNoteOrder: (state, action) => {
      state.noteOrder = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNotesAsync.pending, (state) => {
        state.loadingModal = Constantes.ACTIVE;
      })
      .addCase(getNotesAsync.fulfilled, (state, action) => {
        state.loadingModal = Constantes.INACTIVE;
        state.notes = action.payload;
      })
      .addCase(createNoteAsync.pending, (state) => {
        state.loadingModal = Constantes.ACTIVE;
      })
      .addCase(createNoteAsync.fulfilled, (state, action) => {
        state.loadingModal = Constantes.INACTIVE;
        state.notes = action.payload;
      })
      .addCase(updateNoteAsync.pending, (state) => {
        state.loadingModal = Constantes.ACTIVE;
      })
      .addCase(updateNoteAsync.fulfilled, (state, action) => {
        state.loadingModal = Constantes.INACTIVE;
        state.notes = action.payload;
      })
      .addCase(deleteNoteAsync.pending, (state) => {
        state.loadingModal = Constantes.ACTIVE;
      })
      .addCase(deleteNoteAsync.fulfilled, (state, action) => {
        state.loadingModal = Constantes.INACTIVE;
        state.notes = action.payload;
      })
      .addCase(completeNotesAsync.pending, (state) => {
        state.loadingModal = Constantes.ACTIVE;
      })
      .addCase(completeNotesAsync.fulfilled, (state, action) => {
        state.loadingModal = Constantes.INACTIVE;
        state.notes = action.payload;
        state.notesSelected = [];
      });
  },
});

export const { changeNotesSelected, changeNoteOrder } = noteSlice.actions;

export const selectNotes = (state) => state.note.notes;

export const selectLoadingModal = (state) => state.note.loadingModal;

export const selectNotesSelected = (state) => state.note.notesSelected;

export const selectNoteOrder = (state) => state.note.noteOrder;

export default noteSlice.reducer;