document.addEventListener("DOMContentLoaded", function () {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const currentDayIndex = currentDate.getUTCDay();
  const currentDayName = daysOfWeek[currentDayIndex];
  const utcTimestamp = currentDate.getTime();

  // Update the current day of the week
  const currentDayElement = document.querySelector("#days");
  if (currentDayElement) {
    currentDayElement.textContent = currentDayName;
  }

  // Update the current UTC time in milliseconds
  const currentUTCTimeElement = document.querySelector("#UTC--time");
  if (currentUTCTimeElement) {
    currentUTCTimeElement.textContent = utcTimestamp;
  }
  console.log(currentDayName);
});

