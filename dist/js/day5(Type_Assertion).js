"use strict";
const year = document.getElementById("year");
const thisYear = new Date().getMinutes().toString();
year.setAttribute("datetime", thisYear);
year.textContent = "Minute :  " + thisYear;
console.log(thisYear);
