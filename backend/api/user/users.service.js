const UserModal = require('./users.entity').User;
const bcrypt = require('bcrypt');

const getUser = async (data, done) => {
  const userId = data;
  let userData = await UserModal.findById(userId);
  
  if(!userData) {
    done("User not found");
  } else {
    userData.password = undefined;
    done(null, userData);
  }
};

const registerUser = async (userData, done) => {
  let user = new UserModal({
    ...userData
  });
  user.password = await bcrypt.hash(user.password, 10);

  await user.save(err => {
    if(err) {
      done(err);
      return;
    }
  });
  
  const token = user.generateAuthToken();
  done(null, token, {
      _id: user._id,
      name: user.name,
      email: user.email
    }
  );
};

const loginUser = async (data, done) => {
  const userEmail = data.email;
  const userPassword = data.password;

  await UserModal.findOne({
    email: userEmail
  }, (err, data) => {
    if(err) {
      done(err);
    } else {
      if(!data || !bcrypt.compareSync(userPassword, data.password)) {
        done("User ID or password did not match");
      } else {
        data.password = undefined;
        done(null, data);
      }
    }
  })
}

module.exports = {
  getUser,
  registerUser,
  loginUser
}