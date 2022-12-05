const habitTracker = document.getElementById("habit-tracker");
let days = habitTracker.children;
for (let i = 1; i <= days.length; i++) {
  let currentDay = new Date().getDate() - i + 1;
  if (currentDay <= 0) {
    // Find The Day In The Previous Month
    currentDay =
      new Date(
        `${new Date().getFullYear() + 1} ${new Date().getMonth() + 1} 0`
      ).getDate() + currentDay;
  }
  days[days.length - i].innerHTML = currentDay;
}
