const {eachDayOfInterval} = require("date-fns");

const standard = 6;
const division = 4;
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
const term_startdate = new Date(2024,5,1);
const term_enddate = new Date(2025,3,15);
const holidays = [
    {
        date : "2024-08-15",
        day : "Independence day"
    },
    {
        date : "2024-08-19",
        day : "Rakhi"
    },
    {
        date : "2024-08-26",
        day : "Janmashtmi"
    },
    {
        date : "2024-10-02", 
        day : "Gandhi Jayanti"
    },
    {
        date : "2024-10-11", 
        day : "Dushera"
    },
    {
        date : "2024-11-01",
        day : "Diwali"
    },
    {
        date : "2025-01-15",
        day : "Uttrayan"
    },
    {
        date : "2025-01-26",
        day : "Republic Day"
    },
    {
        date : "2025-03-25",
        day : "Holi"
    }
];
//work for future when we are working on weekdays , weekends and holidays scenario of exams schedule
// const diwaliHolidays = 12;
// const diwali_holiday_starting_date = "2024-10-31";
// const diwali_holiday_ending_date = "2024-12-01";
// const summer_vacation_Days = 20;
// const summer_vacation_start_date = "2025-04-15";
// const summer_vacation_end_date = "2025-06-01";
// const exam_sem_1_start_date = "2024-10-26";
// const exam_Sem_1_end_date = "2024-10-31";
// const exam_sem_2_start_date = "2025-04-09";
// const exam_Sem_2_end_date = "2025-04-15";

//step-1 : I have 6 subjects and 6 days per week so I just count start_date and end_date of term and calculate days then
//I count weekdays and weekends and holidays.
//step-2 : loop for 6 days and each subject contains 1 hour and recess time, here come the logic that it can't schedule 
//in the dates of weekends and holidays.
//step-3 : no two teachers teaches same time in same division,if in division A first subject is maths then it should be
//for whole week and in divison B no first lecture should be maths it sholud be another subject excepts maths.

const count_days_to_term = eachDayOfInterval({start:term_startdate,end:term_enddate});
console.log(count_days_to_term.length);

//find weekends and weekdays from count_days_to_term
