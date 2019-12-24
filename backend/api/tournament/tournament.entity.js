const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    minlength: 3,
    maxlength: 50
  }
}, {collection: 'tournament'});

module.exports = mongoose.model('tournament', schema);