const router = require('express').Router();
const eventController = require('./event.controller');

router.post('/createEvent', (req, res) => {
  const eventData = req.body;
  eventController.createEvent(eventData, (err, response) => {
    if(err) {
      res.send(err);
      return;
    }
    res.send(response);
  });
});

router.get('/all', (req, res) => {
  eventController.getAllEvents((err, response) => {
    if(err) {
      res.send(err);
      return;
    }
    res.send(response);
  });
});

router.get('/eventsByTour', (req, res) => {
  const tourIdData = req.body;
  eventController.getEventsByTourId(tourIdData, (err, response) => {
    if(err) {
      res.send(err);
      return;
    }
    res.send(response);
  });
});

router.get('/eventsByTeam', (req, res) => {
  const teamIdData = req.body;
  eventController.getEventsByTeamId(teamIdData, (err, response) => {
    if(err) {
      res.send(err);
      return;
    }
    res.send(response);
  });
});

module.exports = router;