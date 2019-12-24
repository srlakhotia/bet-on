const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');

const schema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    require: true,
    unique: true,
    minlength: 5,
    maxlength: 255
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255
  },
  isAdmin: {
    type: Boolean,
    required: false,
    default: false
  },
  credits: {
    type: Number,
    default: 1000,
    min: 0
  },
  bets: [{
    eventId: {
      type: mongoose.Schema.Types.ObjectId
    },
    bet: {
      type: mongoose.Schema.Types.ObjectId
    }
  }]
}, { collection: "users" });

schema.methods.generateAuthToken = () => {
  const token = jwt.sign({
    _id: this._id,
    isAdmin: this.isAdmin
  }, 
  config.get('myprivatekey'));
  return token;
};

const User = mongoose.model('users', schema);

const validateUser = user => {
  const schema = {
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(3).max(255).required()
  }
  return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;