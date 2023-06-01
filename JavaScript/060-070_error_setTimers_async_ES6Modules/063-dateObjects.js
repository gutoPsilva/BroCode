// Date Objects são usados para trabalhar com datas e horários

/*
let date = new Date();
let date = new Date(1000000000000000);
let date = new Date(2023, 0, 1, 2, 3, 4, 5);
let date = new Date("January 1, 2023 00:00:00");

let year = date.getFullYear();
let dayOfMonth = date.getDate();
let dayOfWeek = date.getDay()
let month = date.getMonth();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let ms = date.getMilliseconds();

date.setFullYear(2024);
date.setMonth(11);
date.setDate(31);
date.setHours(23);
date.setMinutes(12);
date.setSeconds(30);
date.setMilliseconds(75);
*/

let date = new Date();
document.getElementById("myLabel").innerHTML = formatTime(date);

function formatDate(date){
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return `${day}/${month}/${year}`;
}

function formatTime(date){
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let amOrPm = hours >= 12 ? "pm" : "am"

  hours = (hours % 12) || 12;

  return `${hours}:${minutes}:${seconds} ${amOrPm}`;
}
