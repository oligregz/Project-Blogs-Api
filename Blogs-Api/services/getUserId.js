const User = require('../models/users');

const getUserIdService = async (id) => {
  const user = await User.findByPk(id);
  if (!user) {
    throw new Error('User does not exist');
  }
  return user;
};

module.exports = getUserIdService;
