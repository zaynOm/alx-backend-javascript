const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) reject(Error('Cannot load the database'));

      const lines = data.split('\r\n');
      lines.shift();

      const fields = {};
      lines.forEach((line) => {
        const cols = line.split(',');
        fields[cols[3]] = [...(fields[cols[3]] || []), cols[0]];
      });

      console.log(`Number of students: ${lines.length}`);
      for (const [field, names] of Object.entries(fields)) {
        console.log(
          `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`,
        );
      }
      resolve();
    });
  });
}

module.exports = countStudents;
