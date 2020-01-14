const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    maxlength: 50
  },
  stats: {
    played: {
      type: Number,
      default: 0
    },
    win: {
      type: Number,
      default: 0
    },
    loss: {
      type: Number,
      default: 0
    },
    draw: {
      type: Number,
      default: 0
    },
    no_result: {
      type: Number,
      default: 0
    }
  }
}, {collection: 'team'});

schema.index({
  name: 'text'
});

module.exports = mongoose.model('team', schema);