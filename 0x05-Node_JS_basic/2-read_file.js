const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n');
  lines.shift();

  const fields = {};
  lines.forEach((row) => {
    const cols = row.split(',');
    fields[cols[3]] = [...(fields[cols[3]] || []), cols[0]];
  });

  console.log('Number of students:', lines.length);
  for (const [field, names] of Object.entries(fields)) {
    console.log(
      `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`,
    );
  }
}

module.exports = countStudents;
