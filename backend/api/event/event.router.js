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

router.get('/eventsByTour/:tourId', (req, res) => {
  const tourIdData = req.params.tourId;
  eventController.getEventsByTourId(tourIdData, (err, response) => {
    if(err) {
      res.send(err);
      return;
    }
    res.send(response);
  });
});

router.get('/eventsByTeam/:teamId', (req, res) => {
  const teamIdData = req.params.teamId;
  eventController.getEventsByTeamId(teamIdData, (err, response) => {
    if(err) {
      res.send(err);
      return;
    }
    res.send(response);
  });
});

module.exports = router;