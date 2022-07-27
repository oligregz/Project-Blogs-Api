const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config')[env];

const BlogPosts = require('./blogpost');
const Categories = require('./categories');
const Users = require('./users');

const connection = new Sequelize(config);

BlogPosts.init(connection);
Categories.init(connection);
Users.init(connection);

BlogPosts.associate(connection.models);
Categories.associate(connection.models);
Users.associate(connection.models);

module.exports = connection;
