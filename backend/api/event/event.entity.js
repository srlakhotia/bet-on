const mongoose = require('mongoose');

const schema = mongoose.Schema({
  tournament: {
    exhibition: {
      required: false,
      type: Boolean,
      default: false
    },
    tourID: {
      required: false,
      type: mongoose.Schema.Types.ObjectId,
      ref: 'tournament'
    }
  },
  teams: {
    team_one: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: 'team'
    },
    team_two: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: 'team'
    }
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true
  },
  result: {
    completed: {
      type: Boolean,
      default: false
    },
    status: {
      type: String,
      enum: ['result', 'no_result', 'upcoming'],
      default: 'upcoming'
    },
    win: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'team'
    },
    lose: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'team'
    }
  }
}, { collections: "events" });

module.exports = mongoose.model('event', schema);