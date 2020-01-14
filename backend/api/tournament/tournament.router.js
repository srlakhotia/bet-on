const router = require('express').Router();
const tourController = require('./tournament.controller');

router.post('/createTour', (req, res) => {
  const tourData = req.body;
  tourController.createTour(tourData, (err, response) => {
    if(err) {
      res.send(err);
      return;
    }
    res.send(response);
  })
});

router.get('/getTour/:tourId', (req, res) => {
  const tourData = req.params.tourId;
  tourController.getTour(tourData, (err, response) => {
    if(err) {
      res.send(err);
      return;
    }
    res.send(response);
  });
});

router.get('/searchTour', (req, res) => {
  const teamSearchTerm = req.query.q;
  tourController.searchTournament(teamSearchTerm, (err, response) => {
    if(err) {
      res.send(err);
      return;
    }
    res.send(response);
  });
});

module.exports = router;