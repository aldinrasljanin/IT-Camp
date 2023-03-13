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
  calendarBody.innerHTML = "";

  // Set the month name
  monthName.textContent = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(currentDate);

  // Render the days of the previous month
  const daysOfPrevMonth = firstDayOfMonth - 1;
  for (let i = 0; i < daysOfPrevMonth; i++) {
    const dayCell = document.createElement("td");
    dayCell.classList.add("other-month");
    const day = new Date(
      currentYear,
      currentMonth,
      -daysOfPrevMonth + i + 1
    ).getDate();
    dayCell.textContent = day;
    calendarBody.appendChild(dayCell);
  }

  // Render the days of the current month
  for (let i = 1; i <= daysInMonth; i++) {
    const dayCell = document.createElement("td");
    dayCell.textContent = i;
    if (
      currentYear === currentDate.getFullYear() &&
      currentMonth === currentDate.getMonth() &&
      i === currentDate.getDate()
    ) {
      dayCell.classList.add("selected");
    }
    calendarBody.appendChild(dayCell);
  }

  // Render the days of the next month
  const daysOfNextMonth = 7 - (calendarBody.children.length % 7);
  for (let i = 0; i < daysOfNextMonth; i++) {
    const dayCell = document.createElement("td");
    dayCell.classList.add("other-month");
    const day = new Date(currentYear, currentMonth + 1, i + 1).getDate();
    dayCell.textContent = day;
    calendarBody.appendChild(dayCell);
  }
}

// Render the initial calendar
renderCalendar();

// Add click event listeners to the month navigation buttons
previousMonthButton.addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentYear--;
    currentMonth = 11;
  }
  currentDate = new Date(currentYear, currentMonth, 1);
  renderCalendar();
});

nextMonthButton.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentYear++;
    currentMonth = 0;
  }
  currentDate = new Date(currentYear, currentMonth, 1);
  renderCalendar();
});
