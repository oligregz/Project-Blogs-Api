const postUserService = require('../services/postUser');

const req1PostUsers = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  try {
    res.status(201).json(await postUserService(displayName, email, password, image));
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
};

module.exports = req1PostUsers;