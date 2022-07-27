const getPostService = require('../services/getPost');

const req8GetPost = async (req, res) => {
  try {
    res.status(200).json(await getPostService());
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = req8GetPost;
