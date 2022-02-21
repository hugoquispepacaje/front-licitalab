import { configureStore } from '@reduxjs/toolkit';
import noteReducer from '../features/note/noteSlice'
import modalReducer from '../features/modal/modalSlice'
export const store = configureStore({
  reducer: {
    note:  noteReducer,
    modal: modalReducer
  },
});
