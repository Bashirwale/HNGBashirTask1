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

function formatUTCTime(utcTimestamp) {
  const utcDate = new Date(utcTimestamp);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };
  return utcDate.toLocaleDateString("en-US", options);
}
