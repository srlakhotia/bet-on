const router = require('express').Router();
const usersController = require('./users.controller');

router.get('/getUser/:userId', (req, res) => {
  const data = req.params.userId;
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

router.post('/login', (req, res) => {
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