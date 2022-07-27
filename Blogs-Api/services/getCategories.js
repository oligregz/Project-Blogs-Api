const getCategories = require('../models/categories');

const getCategoriesService = () => getCategories.findAll();

module.exports = getCategoriesService;
