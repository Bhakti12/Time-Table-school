const { addHours, format } = require('date-fns');

// Set the initial start time to 7:00 AM
let startTime = new Date();
startTime.setHours(7, 0, 0, 0);

const schoolEndTime = new Date();
schoolEndTime.setHours(13, 30, 0, 0);

const lectureDuration = 1; // in hours
let numberOfLectures = 6;

while (startTime < schoolEndTime && numberOfLectures > 0) {
  // Check if it's time for a break (10:00 - 10:30)
  if (startTime.getHours() === 10 && startTime.getMinutes() === 0) {
    const breakEndTime = addHours(startTime, 0.5);
    console.log(`Break: ${format(startTime, 'hh:mm a')} - ${format(breakEndTime, 'hh:mm a')}`);
    startTime = breakEndTime;
  } else {
    // Calculate the end time for each lecture
    const endTime = addHours(startTime, lectureDuration);

    // Output the schedule
    console.log(`Lecture ${7 - numberOfLectures + 1}: ${format(startTime, 'hh:mm a')} - ${format(endTime, 'hh:mm a')}`);

    // Set the start time for the next lecture
    startTime = endTime;
    numberOfLectures--;
  }
}

// Ensure that the schedule ends before or at 1:30 PM
if (startTime <= schoolEndTime) {
  console.log(`Remaining time: ${format(startTime, 'hh:mm a')} - ${format(schoolEndTime, 'hh:mm a')}`);
} else {
  console.log('Schedule is already ending after 1:30 PM');
}
