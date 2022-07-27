const user = require('../models/users');
const { getToken } = require('../jwt/jwtoken');

const postLoginService = async (email, password) => {
  const logUser = await user.findOne({
    where: { email },
  });
  if (!logUser) {
    throw new Error('Invalid fields');
  }
  if (logUser.password !== password) {
    throw new Error('Invalid password');
  }
  return {
    token: await getToken(logUser.id),
  };
};

module.exports = postLoginService;