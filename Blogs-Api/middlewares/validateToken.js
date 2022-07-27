const User = require('../models/users');
const {
  checkToken,
} = require('../jwt/jwtoken');

const validateToken = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const { userId } = await checkToken(authorization);
    const user = await User.findByPk(userId);
    if (!user) {
       throw new Error('User not found');
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateToken;
