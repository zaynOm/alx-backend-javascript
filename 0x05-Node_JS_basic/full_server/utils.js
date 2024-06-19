import fs from 'fs';

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) reject(new Error(err));
      const students = data.split('\r\n');
      students.splice(0, 1);

      const fields = {};
      students.forEach((row) => {
        const cols = row.split(',');
        fields[cols[3]] = [...(fields[cols[3]] || []), cols[0]];
      });
      resolve(fields);
    });
  });
}
export default readDatabase;
