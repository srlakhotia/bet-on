const router = require('express').Router();
const tourController = require('./tournament.service');

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

router.get('/getTour', (req, res) => {
  const tourData = req.body;
  tourController.getTour(tourData, (err, response) => {
    if(err) {
      res.send(err);
      return;
    }
    res.send(response);
  });
});

module.exports = router;