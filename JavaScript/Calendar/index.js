// Get the calendar elements
const calendarBody = document.getElementById("calendar__body");
const monthName = document.getElementById("name");
const previousMonthButton = document.getElementById("previous__month");
const nextMonthButton = document.getElementById("next__month");

// Set the initial date to the current month
let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
