class AppController {
  static getHome(req, res) {
    return res.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
