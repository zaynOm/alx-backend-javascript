import readDatabase from '../utils';

const database = process.argv[2];

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(database)
      .then((data) => {
        let result = 'This is the list of our studentsn\n';
        result += `Number of students in CS: ${data.CS.length}. List: ${data.CS.join(', ')}\n`;
        result += `Number of students in SWE: ${data.SWE.length}. List: ${data.SWE.join(', ')}\n`;
        res.send(result);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (!['CS', 'SWE'].includes(major)) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(database)
      .then((data) => {
        res.send(`List: ${data[major].join(', ')}`);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
