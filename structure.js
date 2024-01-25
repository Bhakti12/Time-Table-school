function createSubject(time, subject, teacher) {
    return {
      time,
      subject,
      teacher,
    };
  }
  
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  
  const divisions = ['division_A', 'division_B', 'division_C', 'division_D'];
  
  const schedule = [];
  
  // Loop through each division
  divisions.forEach((division) => {
    const divisionSchedule = [];
  
    // Loop through each day of the week
    daysOfWeek.forEach((day) => {
      const daySchedule = {
        date: '2024/6/1', // You might want to dynamically generate dates
        day,
        subjects: [],
      };
  
      // Add subjects to the day's schedule
      daySchedule.subjects.push(
        createSubject('7:00 to 8:00 AM', 'Maths', 'Mr. Pole'),
        createSubject('7:00 to 8:00 AM', 'English', 'Mrs. Shah'),
        createSubject('7:00 to 8:00 AM', 'Science', 'Mrs. Acharya'),
        createSubject('7:00 to 8:00 AM', 'Computer Basics', 'Mr. Sarabhai')
        // Add more subjects as needed
      );
  
      divisionSchedule.push(daySchedule);
    });
  
    // Add the division's schedule to the overall schedule
    schedule.push({ [division]: divisionSchedule });
  });
  
  console.log(schedule);
  