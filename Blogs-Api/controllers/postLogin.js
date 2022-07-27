const postLoginService = require('../services/postLogin');

const req2PostLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    res.status(200).json(await postLoginService(email, password));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }  
};

module.exports = req2PostLogin;
