const router = require('express').Router();
const users = require('./user');
const tours = require('./tournament')

router.use('/users', users);
router.use('/tours', tours);

module.exports = router;