import Constantes from "./Constantes";

const dateToString = (date) => {
  date = new Date(date);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  return `${day<10?`0${day}`:day}/${month<10?`0${month}`:month}/${year}`;
}

const isDateExpired = (date) => {
  date = new Date(date);
  let today = new Date();
  if(
    date.getDate() == today.getDate() &&
    date.getMonth() == today.getMonth() &&
    date.getFullYear() == today.getFullYear())
  {
    return false;
  }
  return date < today;
}

export default {
  dateToString,
  isDateExpired
}