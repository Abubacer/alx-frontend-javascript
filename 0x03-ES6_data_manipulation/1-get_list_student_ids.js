// returns an array of ids from a list of object.
function getListStudentIds(getListStudents) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }

  return getListStudents.map(((student) => student.id));
}

export default getListStudentIds;
