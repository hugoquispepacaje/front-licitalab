import React from 'react';
import './FormAddNoteModal.css';
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';
import { InputText } from 'primereact/inputtext';

function FormAddNoteModal({ formulario, setFormulario }) {

  addLocale('es', {
    firstDayOfWeek: 1,
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
    dayNamesMin: ['D', 'L', 'M', 'Mi', 'J', 'V', 'S'],
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
    today: 'Hoy',
    clear: 'Claro'
  });
  const setDescripcion = (value)=>{
    setFormulario({
      id: formulario.id,
      descripcion: value,
      fechaVencimiento: formulario.fechaVencimiento
    })
  }
  const setFechaVencimiento = (value)=>{
    setFormulario({
      id: formulario.id,
      descripcion: formulario.descripcion,
      fechaVencimiento: value
    })
  }
  return (
    <div>
      <div className="field col-12">
        <label htmlFor="descripcion">Descripción:</label>
        <br></br>
        <InputText
          className='fanm-width'
          id="descripcion" 
          value={formulario.descripcion} 
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </div>
      <br></br>
      <div className="field col-12">
        <label htmlFor="fechaVencimiento">Fecha de Vencimiento:</label>
        <br></br>
        <Calendar
          className='fanm-width'
          id="fechaVencimiento" 
          value={formulario.fechaVencimiento}
          onChange={(e) => setFechaVencimiento(e.value)} locale="es" dateFormat="dd/mm/yy" 
        />
      </div>
    </div>
  );
}

export default FormAddNoteModal;