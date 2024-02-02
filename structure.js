// const { eachDayOfInterval, getDay, addHours, format } = require("date-fns");

// const divisons = [
//   {
//     standard: 6,
//     division: "division_A",
//   },
//   {
//     standard: 6,
//     division: "division_B",
//   },
//   {
//     standard: 6,
//     division: "division_C",
//   },
//   {
//     standard: 6,
//     division: "division_D",
//   },
// ];

// const subjects = [
//   {
//     subject: "Maths",
//     teacher: "Mr.pole",
//   },
//   {
//     subject: "Science",
//     teacher: "Mrs.Acharya",
//   },
//   {
//     subject: "English",
//     teacher: "Mrs.shah",
//   },
//   {
//     subject: "Hindi",
//     teacher: "Mr.gupta",
//   },
//   {
//     subject: "social science",
//     teacher: "Mrs.sharma",
//   },
//   {
//     subject: "Computer Basics",
//     teacher: "Mr.sarabhai",
//   },
// ];

// //Date for which we have to generate time-table
// const date = new Date();

// //starting time
// let schoolStartTime = new Date();
// schoolStartTime.setHours(7, 0, 0, 0);

// //school ending time
// let schoolEndTime = new Date();
// schoolEndTime.setHours(13, 30, 0, 0);

// const lectureDuration = 1;
// let numberOfLectures = 6;

// let schedule = [];
// let subjects_data = {};
// let divison_data = {};

// // Function to format and log the schedule, and update the subject object
// function logScheduleAndAssignTime(subject, startTime, endTime) {
//   const formattedTime = `${format(startTime, "hh:mm a")} - ${format(
//     endTime,
//     "hh:mm a"
//   )}`;
//   console.log(`${subject.subject}: ${formattedTime}`);
//   subject.time = formattedTime;
// }

// for (let div of divisons) {
//   let startTime = schoolStartTime;
//   for (let subject of subjects) {
//     if (startTime.getHours() === 10 && startTime.getMinutes() === 0) {
//       const breakEndTime = addHours(startTime, 0.5);
//       console.log(
//         `Break: ${format(startTime, "hh:mm a")} - ${format(
//           breakEndTime,
//           "hh:mm a"
//         )}`
//       );
//       startTime = breakEndTime;
//     }

//     const endTime = addHours(startTime, lectureDuration);
//     logScheduleAndAssignTime(subject, div, startTime, endTime);
//     startTime = endTime;
//   }
//   while (startTime < schoolEndTime && numberOfLectures > 0) {
//     if (startTime.getHours() === 10 && startTime.getMinutes() === 0) {
//       const breakEndTime = addHours(startTime, 0.5);
//       console.log(`Break: ${format(startTime, "hh:mm a")} - ${format(breakEndTime, "hh:mm a")}`);
//       startTime = breakEndTime;
//     } else {
//       const endTime = addHours(startTime, lectureDuration);
//       console.log(`Lecture ${7 - numberOfLectures + 1}: ${format(startTime, "hh:mm a")} - ${format(endTime, "hh:mm a")}`);
//       startTime = endTime;
//       numberOfLectures--;
//     }
//   }
// }

const { addHours, format } = require("date-fns");

const divisions = [
  {
    standard: 6,
    division: "division_A",
  },
  {
    standard: 6,
    division: "division_B",
  },
  {
    standard: 6,
    division: "division_C",
  },
  {
    standard: 6,
    division: "division_D",
  },
];

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

let schoolStartTime = new Date();
schoolStartTime.setHours(7, 0, 0, 0);

let schoolEndTime = new Date();
schoolEndTime.setHours(13, 30, 0, 0);

const lectureDuration = 1;

let schedule = [];

function logScheduleAndAssignTime(subject, division, startTime, endTime) {
  const formattedTime = `${format(startTime, "hh:mm a")} - ${format(
    endTime,
    "hh:mm a"
  )}`;
  console.log(`${subject.subject} (${division.division}): ${formattedTime}`);
  subject.time = formattedTime;
}

for (let division of divisions) {
  let startTime = new Date(schoolStartTime); 
  let numberOfLectures = 6;

  for (let subject of subjects) {
    if (startTime.getHours() === 10 && startTime.getMinutes() === 0) {
      const breakEndTime = addHours(startTime, 0.5);
      console.log(
        `Break: ${format(startTime, "hh:mm a")} - ${format(
          breakEndTime,
          "hh:mm a"
        )}`
      );
      startTime = breakEndTime;
    }

    const endTime = addHours(startTime, lectureDuration);
    logScheduleAndAssignTime(subject, division, startTime, endTime);
    startTime = endTime;
  }

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
}