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
  
  divisions.forEach((division) => {
    const divisionSchedule = [];
  
    daysOfWeek.forEach((day) => {
      const daySchedule = {
        date: '2024/6/1',
        day,
        subjects: [],
      };
  
      daySchedule.subjects.push(
        createSubject('7:00 to 8:00 AM', 'Maths', 'Mr. Pole'),
        createSubject('7:00 to 8:00 AM', 'English', 'Mrs. Shah'),
        createSubject('7:00 to 8:00 AM', 'Science', 'Mrs. Acharya'),
        createSubject('7:00 to 8:00 AM', 'Computer Basics', 'Mr. Sarabhai')
      );
  
      divisionSchedule.push(daySchedule);
    });
  
    schedule.push({ [division]: divisionSchedule });
  });
  
  console.log(schedule);
  console.log(schedule[0].division_A);
  console.log(schedule[0].division_A[0].subjects);

exports.module = {
  createSubject
};