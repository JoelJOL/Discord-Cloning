const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

for (let i = 0; i < month.length; i++) {
  let monthList = document.getElementById("month-list");
  let monthItem = document.createElement("option");
  monthItem.setAttribute("value", `${i + 1}`);
  monthItem.innerHTML = `${month[i]}`;
  monthList.appendChild(monthItem);
}
for (let i = 1; i <= 31; i++) {
  let dateList = document.getElementById("date-list");
  let dateItem = document.createElement("option");
  dateItem.setAttribute("value", `${i}`);
  dateItem.innerHTML = `${i}`;
  dateList.appendChild(dateItem);
}
for (let i = 2020; i >= 1900; i--) {
  let yearList = document.getElementById("year-list");
  let yearItem = document.createElement("option");
  yearItem.setAttribute("value", `${i}`);
  yearItem.innerHTML = `${i}`;
  yearList.appendChild(yearItem);
}
