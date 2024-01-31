const A = [12, 2, 3, 4, 5, 6, 7, 8, 9];

// Create an array with elements from 1 to 20
const allNumbers = Array.from({ length: 20 }, (_, index) => index + 1);

// Filter out elements from array A
const resultArray = allNumbers.filter(number => !A.includes(number));

console.log(resultArray);

var isoDateString = "2024-06-30T18:30:00.000Z";
var myDate = new Date(isoDateString);

// Get day, month, and year
var day = myDate.getUTCDate();
var month = myDate.getUTCMonth() + 1; // Adding 1 because months are zero-based
var year = myDate.getUTCFullYear();

// Format day and month with leading zeros if needed
var formattedDay = (day < 10) ? "0" + day : day;
var formattedMonth = (month < 10) ? "0" + month : month;

// Create the formatted date string
var formattedDateString = formattedDay + "-" + formattedMonth + "-" + year;

console.log(formattedDateString);
