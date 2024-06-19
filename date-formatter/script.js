const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

const date = new Date();
const day = date.getDate(); // It gives the exact of the current going month. Right now it is June 18, 2024
console.log(day); // Output: 18

const month = date.getMonth() + 1; // It returns a number between 0 to 11 but as the months are 12 so 1 is added to it.
console.log(month); // Output: 6 (June)

const year = date.getFullYear(); // It returns the current on going year
console.log(year); // Output: 2024

const hours = date.getHours(); // It returns the current on going hour. 0 means midnight and 23 is 11:00 pm
console.log(hours); // Output: 18 (It is currently 18:57 pm)

const minutes = date.getMinutes(); // It returns the current on going minutes. Returns the number between 0 to 59.
console.log(minutes); // Output: 5 (19:05 pm)

const formattedDate = `${day}`;
console.log(formattedDate);