import axios from 'axios';
import Constantes from '../utiles/Constantes';

axios.defaults.baseURL = Constantes.URL_API;

const getNotes = async () => {
  try {
    const response = await axios.get('/tareas');
    return response;
  } catch (error) {
    console.error(error);
  }
}

const createNote = async (note) => {
  try {
    const response = await axios.post('/tareas', note);
    return response;
  } catch (error) {
    console.error(error);
  }
}

const updateNote = async (id, note) => {
  try {
    const response = await axios.patch('/tareas/' + id, note);
    return response;
  } catch (error) {
    console.error(error);
  }
}

const deleteNote = async (id) => {
  try {
    const response = await axios.delete('/tareas/' + id);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export default {
  getNotes,
  createNote,
  updateNote,
  deleteNote
}