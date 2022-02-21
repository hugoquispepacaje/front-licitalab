import React from 'react';
import './Main.css';
import Header from '../../components/header/Header';
import GeneralFunctions from '../../components/general-functions/GeneralFunctions';
import AddNoteCard from '../../components/add-note-card/AddNoteCard';
import NoteCardContainer from '../../components/note-card-container/NoteCardContainer';
import AddNoteModal from '../../components/add-note-modal/AddNoteModal';

function Main() {
  return (
    <div className="main-container">
      <Header/>
      <GeneralFunctions/>
      <NoteCardContainer/>
      <AddNoteCard/>
      <AddNoteModal/>
    </div>
  );
}

export default Main;