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

module.exports = router;