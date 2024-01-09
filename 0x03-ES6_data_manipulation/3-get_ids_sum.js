// returns the sum of all the student ids.
function getStudentIdsSum(students) {
  return students.reduce((accumulator, currentStudent) => accumulator + currentStudent.id, 0);
}

export default getStudentIdsSum;
