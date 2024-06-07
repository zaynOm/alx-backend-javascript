const fs = require('fs');

module.exports = function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  const students = data.split('\r\n');
  students.splice(0, 1);

  const fields = {};
  students.forEach((row) => {
    const cols = row.split(',');
    fields[cols[3]] = [...(fields[cols[3]] || []), cols[0]];
  });

  console.log(`Number of students: ${students.length}`);
  for (const [key, value] of Object.entries(fields)) {
    console.log(
      `Number of students in ${key} ${value.length}. List: ${value.join(', ')}`,
    );
  }
};
