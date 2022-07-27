const postPOSTService = require('../services/postPOST');

const req7PostPOST = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  try {
    res.status(201).json(await postPOSTService(title, content, categoryIds, req.user));
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

module.exports = req7PostPOST;
