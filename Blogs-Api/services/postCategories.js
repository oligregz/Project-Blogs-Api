const Categories = require('../models/categories');

const postCategorieService = (name) => Categories.create({ name });

module.exports = postCategorieService;
