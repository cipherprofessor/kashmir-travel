const User = require('../models/User');

const getUserById = async (id) => {
  return await User.findById(id);
};

const createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

module.exports = { getUserById, createUser };
