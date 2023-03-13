// Get the calendar elements
const calendarBody = document.getElementById("calendar__body");
const monthName = document.getElementById("name");
const previousMonthButton = document.getElementById("previous__month");
const nextMonthButton = document.getElementById("next__month");

// Set the initial date to the current month
let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

// Function to render the calendar
function renderCalendar() {
    // Get the number of days in the current month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
    // Get the first day of the current month
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  
    // Clear the calendar body
    calendarBody.innerHTML = '';
  
    // Set the month name
    monthName.textContent = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(currentDate);