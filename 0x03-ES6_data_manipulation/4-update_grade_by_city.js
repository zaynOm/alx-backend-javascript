export default function updateStudentGradeByCity(students, city, newGrads) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const grade = newGrads.find((grad) => student.id === grad.studentId);
      if (grade) return { ...student, grade: grade.grade };
      return { ...student, grade: 'N/A' };
    });
}
