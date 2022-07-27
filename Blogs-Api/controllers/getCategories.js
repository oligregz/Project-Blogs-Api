const getCategoriesService = require('../services/getCategories');

const req6GetCategories = async (req, res) => {
  try {
    res.status(200).json(await getCategoriesService());
  } catch (err) {
    req.status(401).json({ message: err.message });
  }
};

module.exports = req6GetCategories;