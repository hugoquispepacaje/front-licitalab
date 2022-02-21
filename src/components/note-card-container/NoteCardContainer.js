import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getNotesAsync,
  changeNotesSelected,
  selectNotes,
  selectNotesSelected
} from '../../features/note/noteSlice';
import './NoteCardContainer.css';
import NoteCard from '../note-card/NoteCard';

function NoteCardContainer() {
  const notes = useSelector(selectNotes);
  const notesSelect = useSelector(selectNotesSelected);
  const [notesSelected, setNotesSelected] = useState([]); 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNotesAsync());
  }, []);
  useEffect(() => {
    setNotesSelected(notesSelect);
  }, [notesSelect]);
  const addNoteSelected = (id) =>{
    let notes = [id].concat(notesSelected);
    dispatch(changeNotesSelected(notes));
  }
  const removeNoteSelected = (id) =>{
    let notes = notesSelected.filter((note)=>note!==id);
    dispatch(changeNotesSelected(notes));
  }
  const notesCard = notes.map((note)=>{
    return (
      <NoteCard 
        key={note.id} 
        note={note}
        addNoteSelected={addNoteSelected}
        removeNoteSelected={removeNoteSelected}
      />
    )
  });
  return (
    <div className='ncc-container'>
      {notesCard}
    </div>
  );
}

export default NoteCardContainer;