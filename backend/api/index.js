const router = require('express').Router();
const users = require('./user');
const tours = require('./tournament');
const teams = require('./team');
const events = require('./event');

router.use('/users', users);
router.use('/tours', tours);
router.use('/teams', teams);
router.use('/events', events);

module.exports = router;