const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

function countStudents(path) {
  return new Promise((resolve, rejects) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) return rejects(Error('Cannot load the database'));

      const students = data.split('\r\n');
      students.splice(0, 1);

      const fields = {};
      students.forEach((row) => {
        const cols = row.split(',');
        fields[cols[3]] = [...(fields[cols[3]] || []), cols[0]];
      });

      const res = [`Number of students: ${students.length}`];
      for (const [key, value] of Object.entries(fields)) {
        res.push(
          `Number of students in ${key} ${value.length}. List: ${value.join(', ')}`,
        );
      }
      resolve(res.join('\n'));
    });
  });
}

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  countStudents(process.argv[2])
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((err) => {
      res.end(`This is the list of our students\n${err.message}`);
    });
});

app.listen(port);

module.exports = app;
