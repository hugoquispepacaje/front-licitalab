import React from 'react';
import './Header.css';
import Utiles from '../../utiles/Utiles';

function Header() {
  return (
    <div className="header-container">
      <h3>Cosas por Hacer</h3>
      <h4>Hoy: {Utiles.dateToString(Date.now())}</h4>
    </div>
  );
}

export default Header;