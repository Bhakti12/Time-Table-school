const {eachDayOfInterval, getDay} = require("date-fns");

// ... (your existing code)
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

const isWithinInterval = (date, start, end) => date >= start && date <= end;

const total_diwali_vacation = eachDayOfInterval({start:diwali_holiday_starting_date,end:diwali_holiday_ending_date});
const total_diwali_Days = total_diwali_vacation.filter(date => isWithinInterval(date, term_startdate, term_enddate)).length;

const total_summer_vacation = eachDayOfInterval({start:summer_vacation_start_date,end:summer_vacation_end_date});
const total_summer_vacation_days = total_summer_vacation.filter(date => isWithinInterval(date, term_startdate, term_enddate)).length;

const exam_sem_1_days = eachDayOfInterval({start:exam_sem_1_start_date,end:exam_Sem_1_end_date});
const exam_sem_1_total_days = exam_sem_1_days.filter(date => isWithinInterval(date, term_startdate, term_enddate)).length;

const exam_Sem_2_days = eachDayOfInterval({start:exam_sem_2_start_date,end:exam_Sem_2_end_date});
const exam_Sem_2_total_days = exam_Sem_2_days.filter(date => isWithinInterval(date, term_startdate, term_enddate)).length;

// Create an array of all dates between term_startdate and term_enddate
const allDates = eachDayOfInterval({ start: term_startdate, end: term_enddate });
console.log("allDates",allDates.length);

// Function to check if a date is a holiday
const isHoliday = (date) => holidays.some(holiday => holiday.date.getTime() === date.getTime());

// Function to check if a date is within the specified interval

// Function to filter out holidays, vacations, and exam dates
const filterDates = (dates, excludedDates) => dates.filter(date => !excludedDates.some(excludedDate => excludedDate.getTime() === date.getTime()));

// Exclude holidays, summer vacation, Diwali vacation, exam sem1, and exam sem2 dates
const excludedDates = [
    ...holidays.map(holiday => holiday.date),
    ...total_diwali_vacation,
    ...total_summer_vacation,
    ...exam_sem_1_days,
    ...exam_Sem_2_days
];

console.log(excludedDates);

// Get the array of dates excluding the specified dates
const filteredDates = filterDates(allDates, excludedDates);

// Display the result
console.log(filteredDates);
console.log(filteredDates.length);