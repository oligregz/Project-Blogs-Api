const postCategoriesService = require('../services/postCategories.js');

const req5PostCategories = async (req, res) => {
  const { name } = req.body;
  try {
    if (!name) {
      throw new Error('"name" is required');
    }
    res.status(201).json(await postCategoriesService(name));
  } catch (err) {
    res.status(400).json({ message: err.message }); 
  }
};

module.exports = req5PostCategories;
