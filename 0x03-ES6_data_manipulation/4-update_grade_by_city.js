// returns an array of students for a specific city with their new grade.
function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const studentGrade = newGrades.find((grade) => grade.studentId === student.id);
      return {
        // If a student doesn’t have grade in newGrades, the grade is N/A.
        ...student, grade: studentGrade ? studentGrade.grade : 'N/A',
      };
    });
}

export default updateStudentGradeByCity;
