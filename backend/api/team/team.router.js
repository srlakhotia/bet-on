const router = require('express').Router();
const teamController = require('./team.controller');

router.post('/createTeam', (req, res) => {
  const teamData = req.body;
  teamController.createTeam(teamData, (err, response) => {
    if(err) {
      res.send(err);
      return;
    }
    res.send(response);
  });
});

router.get('/searchTeam', (req, res) => {
  const teamSearchTerm = req.query.q;
  teamController.searchTeam(teamSearchTerm, (err, response) => {
    if(err) {
      res.send(err);
      return;
    }
    res.send(response);
  });
});

module.exports = router;