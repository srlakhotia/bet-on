const usersService = require('./users.service');

const getUser = (data, done) => {
  usersService.getUser(data, done);
};

const registerUser = (userData, done) => {
  usersService.registerUser(userData, done);
}

const loginUser = (userData, done) => {
  usersService.loginUser(userData, done);
};

module.exports = {
  getUser,
  registerUser,
  loginUser
}