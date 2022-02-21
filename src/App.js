import React from 'react';
import './App.css';
import Main from './views/main/Main';
import LoadingModal from './components/loading-modal/LoadingModal';
function App() {
  return (
    <div className="App">
      <Main />
      <LoadingModal />
    </div>
  );
}

export default App;
