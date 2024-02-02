// const { addHours, format } = require("date-fns");

// let startTime = new Date();
// startTime.setHours(7, 0, 0, 0);

// const schoolEndTime = new Date();
// schoolEndTime.setHours(13, 30, 0, 0);

// const lectureDuration = 1;
// let numberOfLectures = 6;

// while (startTime < schoolEndTime && numberOfLectures > 0) {
//   if (startTime.getHours() === 10 && startTime.getMinutes() === 0) {
//     const breakEndTime = addHours(startTime, 0.5);
//     console.log(
//       `Break: ${format(startTime, "hh:mm a")} - ${format(
//         breakEndTime,
//         "hh:mm a"
//       )}`
//     );
//     startTime = breakEndTime;
//   } else {
//     const endTime = addHours(startTime, lectureDuration);

//     console.log(
//       `Lecture ${7 - numberOfLectures + 1}: ${format(
//         startTime,
//         "hh:mm a"
//       )} - ${format(endTime, "hh:mm a")}`
//     );

//     startTime = endTime;
//     numberOfLectures--;
//   }
// }

// if (startTime <= schoolEndTime) {
//   console.log(
//     `Remaining time: ${format(startTime, "hh:mm a")} - ${format(
//       schoolEndTime,
//       "hh:mm a"
//     )}`
//   );
// } else {
//   console.log("Schedule is already ending after 1:30 PM");
// }

const { addHours, format } = require('date-fns');

const subjects = [
  {
    subject: "Maths",
    teacher: "Mr. Pole",
  },
  {
    subject: "Science",
    teacher: "Mrs. Acharya",
  },
  {
    subject: "English",
    teacher: "Mrs. Shah",
  },
  {
    subject: "Hindi",
    teacher: "Mr. Gupta",
  },
  {
    subject: "Social Science",
    teacher: "Mrs. Sharma",
  },
  {
    subject: "Computer Basics",
    teacher: "Mr. Sarabhai",
  },
];

const date = new Date();
let schoolStartTime = new Date();
schoolStartTime.setHours(7, 0, 0, 0);

let schoolEndTime = new Date();
schoolEndTime.setHours(13, 30, 0, 0);

const lectureDuration = 1;
let numberOfLectures = 6;

// Initialize the start time
let startTime = schoolStartTime;

// Function to format and log the schedule, and update the subject object
function logScheduleAndAssignTime(subject, startTime, endTime) {
  const formattedTime = `${format(startTime, "hh:mm a")} - ${format(endTime, "hh:mm a")}`;
  console.log(`${subject.subject}: ${formattedTime}`);
  subject.time = formattedTime;
}

// Iterate through each subject
for (const subject of subjects) {
  if (startTime.getHours() === 10 && startTime.getMinutes() === 0) {
    const breakEndTime = addHours(startTime, 0.5);
    console.log(`Break: ${format(startTime, "hh:mm a")} - ${format(breakEndTime, "hh:mm a")}`);
    startTime = breakEndTime;
  }

  const endTime = addHours(startTime, lectureDuration);
  logScheduleAndAssignTime(subject, startTime, endTime);
  startTime = endTime;
}

// Continue the existing code for the remaining lectures
while (startTime < schoolEndTime && numberOfLectures > 0) {
  if (startTime.getHours() === 10 && startTime.getMinutes() === 0) {
    const breakEndTime = addHours(startTime, 0.5);
    console.log(`Break: ${format(startTime, "hh:mm a")} - ${format(breakEndTime, "hh:mm a")}`);
    startTime = breakEndTime;
  } else {
    const endTime = addHours(startTime, lectureDuration);
    console.log(`Lecture ${7 - numberOfLectures + 1}: ${format(startTime, "hh:mm a")} - ${format(endTime, "hh:mm a")}`);
    startTime = endTime;
    numberOfLectures--;
  }
}

// Now, each subject in the subjects array has a 'time' key with the assigned time slot.
console.log(subjects);