const {eachDayOfInterval, getDay} = require("date-fns");
const nodemon = require("nodemon");
// const {calculateTime} = require("example.js"); 
// const {createSubject} = require("structure.js");

const standard = 6;
const division = 4;
const divisons = ['division_A','division_B','division_C','division_D'];
const subjects = [
{
    subject : "Maths",
    teacher : "Mr.pole"
},
{
    subject : "Science",
    teacher : "Mrs.Acharya"
},
{
    subject : "English",
    teacher : "Mrs.shah"
},
{
    subject : "Hindi",
    teacher : "Mr.gupta"
},
{
    subject : "social science",
    teacher : "Mrs.sharma"
},
{
    subject : "Computer Basics",
    teacher : "Mr.sarabhai"
}
];
const term_startdate = new Date(2024,6,1);
const term_enddate = new Date(2025,4,15);
const holidays = [
    {
        date : new Date(2024,8,15),
        day : "Independence day"
    },
    {
        date : new Date(2024,8,19),
        day : "Rakhi"
    },
    {
        date : new Date(2024,8,26),
        day : "Janmashtmi"
    },
    {
        date : new Date(2024,10,2), 
        day : "Gandhi Jayanti"
    },
    {
        date : new Date(2024,10,11), 
        day : "Dushera"
    },
    {
        date : new Date(2024,11,1),
        day : "Diwali"
    },
    {
        date : new Date(2025,1,15),
        day : "Uttrayan"
    },
    {
        date : new Date(2025,1,26),
        day : "Republic Day"
    },
    {
        date : new Date(2025,3,25),
        day : "Holi"
    }
];
//work for future when we are working on weekdays , weekends and holidays scenario of exams schedule
const diwali_holiday_starting_date = new Date(2024,11,1);
const diwali_holiday_ending_date = new Date(2024,11,21);
const summer_vacation_start_date = new Date(2025,4,16);
const summer_vacation_end_date = new Date(2025,5,31);
const exam_sem_1_start_date = new Date(2024,10,26);
const exam_Sem_1_end_date = new Date(2024,10,31);
const exam_sem_2_start_date = new Date(2025,4,9);
const exam_Sem_2_end_date = new Date(2025,4,15);

const total_diwali_vacation = eachDayOfInterval({start:diwali_holiday_starting_date,end:diwali_holiday_ending_date});
const total_diwali_Days = total_diwali_vacation.length;

console.log(total_diwali_vacation);

const total_summer_vacation = eachDayOfInterval({start:summer_vacation_start_date,end:summer_vacation_end_date});
const total_summer_vacation_days = total_summer_vacation.length;

console.log(total_summer_vacation);

const exam_sem_1_days = eachDayOfInterval({start:exam_sem_1_start_date,end:exam_Sem_1_end_date});
const exam_sem_1_total_days = exam_sem_1_days.length;

console.log(exam_sem_1_days);

const exam_Sem_2_days = eachDayOfInterval({start:exam_sem_2_start_date,end:exam_Sem_2_end_date});
const exam_Sem_2_total_days = exam_Sem_2_days.length;

console.log(exam_Sem_2_days);

//step-1 : I have 6 subjects and 6 days per week so I just count start_date and end_date of term and calculate days then
//I count weekdays and weekends and holidays.
//step-2 : loop for 6 days and each subject contains 1 hour and recess time, here come the logic that it can't schedule 
//in the dates of weekends and holidays.
//step-3 : no two teachers teaches same time in same division,if in division A first subject is maths then it should be
//for whole week and in divison B no first lecture should be maths it sholud be another subject excepts maths.

const count_days_to_term = eachDayOfInterval({start:term_startdate,end:term_enddate});

const totalDays = count_days_to_term.length;
console.log("total term days",totalDays);
console.log("total diwali vacation days",total_diwali_Days);
console.log("total summer vacation days",total_summer_vacation_days);
console.log("Exam sem 1 total days",exam_sem_1_total_days);
console.log("exam sem 2 total days",exam_Sem_2_total_days);

//find weekends and weekdays from count_days_to_term
let weekends = [];
let weekdays = [];
count_days_to_term.forEach(date => {
    const dayOfWeek = getDay(date);
    if(dayOfWeek === 0){
        weekends.push(date);
    }else{
        weekdays.push(date);
    }
});

// console.log("total weekends",weekends.length);
// console.log("total weekdays",weekdays.length);
console.log("holidays",holidays.length);
// console.log(weekends);

weekends = weekends.filter(date => !total_diwali_vacation.includes(date) && !total_summer_vacation.includes(date) && !exam_sem_1_days.includes(date) && !exam_Sem_2_days.includes(date) && !holidays.includes(date));
console.log("weekends",weekends.length);

const excludedDates = [
    ...weekends.map(date => ({ date, type: "weekend" })),
    ...total_diwali_vacation.map(date => ({ date, type: "diwali" })),
    ...total_summer_vacation.map(date => ({ date, type: "summer" })),
    ...exam_sem_1_days.map(date => ({ date, type: "exam_sem_1" })),
    ...exam_Sem_2_days.map(date => ({ date, type: "exam_Sem_2" })),
    ...holidays.map(holiday => ({ date: holiday.date, type: "holiday" }))
];

console.log("exculdedDates",excludedDates.length);

const total_days_for_study = totalDays - (excludedDates.length);
console.log("total days for study",total_days_for_study);
console.log("totaldays",totalDays,"count",count_days_to_term.length);

const studyDates = count_days_to_term.filter(date => {
    const isExcluded = excludedDates.some(excludedDate => {
        // console.log("sdfsdf",excludedDate);
        if (excludedDate.date.getTime() === date.getTime()) {
            // console.log("Excluded Date:", date, "Type:", excludedDate.type);
            return true;
        }
        return false;
    });

    return !isExcluded;
});

console.log("Dates for study:", studyDates.length);
console.log("Study Dates:", studyDates);
//loop on total_days_for_study to make schedule
//sample schedule that generate is like below : 

// const schedule = [{
//     divion_A : [{
//         date : 2024/6/1,
//         day : monday,
//         subjects : [
//             {
//                 time : "7:00 to 8:00 AM",
//                 subject : "Maths",
//                 teacher : "Mr.pole" 
//             }
//         ]
//     }],
//     division_B : [{
//         date : 2024/6/1,
//         day : monday,
//         subjects : [
//             {
//                 time : "7:00 to 8:00 AM",
//                 subject : "English",
//                 teacher : "Mrs.shah" 
//             }
//         ]
//     }],
//     division_C : [{
//         date : 2024/6/1,
//         day : monday,
//         subjects : [
//             {
//                 time : "7:00 to 8:00 AM",
//                 subject : "Science",
//                 teacher : "Mrs.Acharya" 
//             }
//         ]
//     }],
//     division_D : [{
//         date : 2024/6/1,
//         day : monday,
//         subjects : [
//             {
//                 time : "7:00 to 8:00 AM",
//                 subject : "Computer Basics",
//                 teacher : "Mr.sarabhai" 
//             }
//         ]
//     }]
// }];

//set intital start_time and end_time