const getUserService = require('../services/getUser');

const req3GetUser = async (req, res) => {
  try {
    res.status(200).json(await getUserService()); 
  } catch (err) {
    req.status(401).json({ message: err.message });
  }
};

module.exports = req3GetUser;
