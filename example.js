const { addHours, format } = require('date-fns');

let startTime = new Date();
startTime.setHours(7, 0, 0, 0);

const schoolEndTime = new Date();
schoolEndTime.setHours(13, 30, 0, 0);

const lectureDuration = 1;
let numberOfLectures = 6;

while (startTime < schoolEndTime && numberOfLectures > 0) {
  if (startTime.getHours() === 10 && startTime.getMinutes() === 0) {
    const breakEndTime = addHours(startTime, 0.5);
    console.log(`Break: ${format(startTime, 'hh:mm a')} - ${format(breakEndTime, 'hh:mm a')}`);
    startTime = breakEndTime;
  } else {
    const endTime = addHours(startTime, lectureDuration);

    console.log(`Lecture ${7 - numberOfLectures + 1}: ${format(startTime, 'hh:mm a')} - ${format(endTime, 'hh:mm a')}`);

    startTime = endTime;
    numberOfLectures--;
  }
}

if (startTime <= schoolEndTime) {
  console.log(`Remaining time: ${format(startTime, 'hh:mm a')} - ${format(schoolEndTime, 'hh:mm a')}`);
} else {
  console.log('Schedule is already ending after 1:30 PM');
}