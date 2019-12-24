const router = require('express').Router();
const usersController = require('./users.controller');

router.get('/getUser', (req, res) => {
  const data = req.body;
  usersController.getUser(data, (err, response) => {
    if(err) {
      res.send(err);
    } else {
      res.send(response);
    }
  });
});

router.post('/registerUser', (req, res) => {
  const userData = req.body;
  usersController.registerUser(userData, (err, token, response) => {
    if(err) {
      res.send(err);
      return;
    }
    res.header("x-auth-token", token).send(response);
  });
});

router.get('/login', (req, res) => {
  const userData = req.body;
  usersController.loginUser(userData, (err, response) => {
    if(err) {
      res.send(err);
      return;
    }
    res.send(response);
  });
});

module.exports = router;