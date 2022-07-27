const Blogposts = require('../models/blogpost');
const Categories = require('../models/categories');
const Users = require('../models/users');

const getPostService = () => Blogposts
  .findAll({ include: [{ model: Users, as: 'user' }, { model: Categories, as: 'categories' }] });

module.exports = getPostService;