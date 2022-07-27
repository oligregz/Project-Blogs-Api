const { getToken } = require('../jwt/jwtoken');
const postUsers = require('../models/users');

const postUserService = async (displayName, email, password, image) => {
  const emailExist = await postUsers.findOne({ where: { email } });
  if (emailExist) {
    throw new Error('User already registered');
  } else {
      const user = await postUsers.create({ 
        displayName,
        email,
        password,
        image,
      });
      return {
        token: await getToken(user.id),
      };
  }
};

module.exports = postUserService;